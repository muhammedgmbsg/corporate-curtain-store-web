"use client";

import { useState, useEffect } from "react";
import { account, databases, storage, databaseId, collectionId, bucketId, ID, Query } from "@/lib/appwrite";
import { Trash2, Upload, Loader2, Plus, LogOut, Edit2, X, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
    id: string;
    title: string;
    description: string;
    category: string;
    images: string[];
}

const CATEGORIES = [
    "Tül Perde",
    "Stor Perde",
    "Zebra Perde",
    "Fon Perde",
    "Dikey Tül Perde",
    "Ahşap Jaluzi",
    "Plicell",
    "Motorlu Kumandalı Sistem (Stor-Zebra)"
];

export default function AdminPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: CATEGORIES[0],
    });
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [existingImages, setExistingImages] = useState<string[]>([]);

    useEffect(() => {
        checkUserAndFetch();
    }, []);

    async function checkUserAndFetch() {
        try {
            await account.get();
            fetchProducts();
        } catch (error) {
            router.push("/login");
        }
    }

    async function fetchProducts() {
        try {
            const response = await databases.listDocuments(databaseId, collectionId, [Query.orderDesc('$createdAt')]);
            setProducts(response.documents.map(doc => ({
                id: doc.$id,
                title: doc.title,
                description: doc.description,
                category: doc.category,
                images: doc.images || []
            })));
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    function handleEdit(product: Product) {
        setEditingId(product.id);
        setFormData({
            title: product.title,
            description: product.description || "",
            category: product.category || CATEGORIES[0],
        });
        setExistingImages(product.images || []);
        setImageFiles([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function resetForm() {
        setEditingId(null);
        setFormData({ title: "", description: "", category: CATEGORIES[0] });
        setImageFiles([]);
        setExistingImages([]);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (imageFiles.length === 0 && existingImages.length === 0) return alert("Lütfen en az bir resim yükleyin!");
        setUploading(true);

        try {
            let uploadedUrls: string[] = [...existingImages];
            if (imageFiles.length > 0) {
                for (const file of imageFiles) {
                    const uploadedFile = await storage.createFile(bucketId, ID.unique(), file);
                    const fileUrl = storage.getFileView(bucketId, uploadedFile.$id).toString();
                    uploadedUrls.push(fileUrl);
                }
            }

            const productData = {
                title: formData.title,
                description: formData.description,
                category: formData.category,
                images: uploadedUrls,
            };

            if (editingId) {
                await databases.updateDocument(databaseId, collectionId, editingId, productData);
            } else {
                await databases.createDocument(databaseId, collectionId, ID.unique(), productData);
            }
            alert(editingId ? "Güncellendi!" : "Eklendi!");
            resetForm();
            fetchProducts();
        } catch (error) {
            console.error(error);
            alert("Hata oluştu!");
        } finally {
            setUploading(false);
        }
    }

    async function handleDelete(id: string) {
        if (!confirm("Silmek istediğine emin misin?")) return;
        try {
            await databases.deleteDocument(databaseId, collectionId, id);
            setProducts(products.filter(p => p.id !== id));
            if (editingId === id) resetForm();
        } catch (error) {
            console.error(error);
            alert("Silinemedi!");
        }
    }

    async function handleLogout() {
        try {
            await account.deleteSession("current");
        } catch (e) {
            console.error(e);
        }
        router.push("/login");
    }

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-slate-600">Yükleniyor...</div>;

    const inputStyle = "w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block p-3 placeholder-gray-400 transition shadow-sm";

    return (
        <div className="min-h-screen bg-gray-50/50 p-6 md:p-12 font-sans">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Yönetim Paneli</h1>
                        <p className="text-gray-500 text-sm mt-1">Mağaza içeriğini buradan yönetebilirsiniz.</p>
                    </div>
                    <button onClick={handleLogout} className="text-red-600 bg-red-50 hover:bg-red-100 px-5 py-2.5 rounded-xl transition font-medium flex items-center gap-2">
                        <LogOut size={18} /> Çıkış
                    </button>
                </div>

                <div className={`p-8 rounded-2xl shadow-lg border mb-12 transition-all duration-300 ${editingId ? 'bg-indigo-50/50 border-indigo-200 ring-1 ring-indigo-200' : 'bg-white border-gray-100'}`}>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
                            {editingId ? <Edit2 size={22} className="text-indigo-600" /> : <Plus size={22} className="text-indigo-600" />}
                            {editingId ? "Ürün Düzenleme Modu" : "Yeni Ürün Ekle"}
                        </h2>
                        {editingId && (
                            <button onClick={resetForm} className="text-sm bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600 hover:text-red-600 hover:border-red-200 transition flex items-center gap-2 shadow-sm">
                                <X size={16} /> Vazgeç
                            </button>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">Ürün Başlığı</label>
                                <input
                                    type="text"
                                    placeholder="Örn: Salon Takımı"
                                    className={inputStyle}
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">Kategori</label>
                                <select
                                    className={inputStyle}
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                >
                                    {CATEGORIES.map((cat) => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Açıklama</label>
                            <textarea
                                placeholder="Ürün özelliklerini detaylıca yazınız..."
                                className={`${inputStyle} h-32 resize-none`}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        {/* Sadece Resim Yükleme Alanı Kaldı (Fiyat silindi) */}
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Ürün Görselleri</label>
                            <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition bg-white group h-[140px]">
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    onChange={(e) => setImageFiles(Array.from(e.target.files || []))}
                                />
                                <div className="text-gray-400 group-hover:text-indigo-500 transition flex flex-col items-center gap-2">
                                    <Upload size={32} />
                                    <span className="text-sm font-medium">{imageFiles.length > 0 ? `${imageFiles.length} dosya seçildi` : "Resimleri buraya sürükleyin veya tıklayın"}</span>
                                </div>
                            </div>
                        </div>

                        {existingImages.length > 0 && (
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Mevcut Resimler</p>
                                <div className="flex gap-3 overflow-x-auto pb-2">
                                    {existingImages.map((url, idx) => (
                                        <div key={idx} className="relative w-20 h-20 rounded-lg overflow-hidden group shadow-sm flex-shrink-0">
                                            <Image src={url} alt="product" fill className="object-cover" />
                                            <button
                                                type="button"
                                                onClick={() => setExistingImages(existingImages.filter((_, i) => i !== idx))}
                                                className="absolute inset-0 bg-red-900/70 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition backdrop-blur-sm"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button
                            disabled={uploading}
                            type="submit"
                            className={`w-full py-3.5 rounded-xl text-white font-semibold shadow-lg transition transform active:scale-[0.99] flex justify-center items-center gap-2
                ${editingId
                                    ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200'
                                    : 'bg-slate-900 hover:bg-slate-800 shadow-slate-300'}`}
                        >
                            {uploading ? <Loader2 className="animate-spin" /> : (editingId ? "Değişiklikleri Kaydet" : "Ürünü Yayınla")}
                        </button>
                    </form>
                </div>

                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-800">Vitrin Listesi</h2>
                    <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-medium">{products.length} Ürün</span>
                </div>

                <div className="space-y-4">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col md:flex-row gap-5 items-start md:items-center group">
                            <div className="relative w-full md:w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                                {product.images && product.images[0] ? (
                                    <Image src={product.images[0]} alt={product.title} fill className="object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400"><ImageIcon size={24} /></div>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="bg-indigo-50 text-indigo-700 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border border-indigo-100">{product.category}</span>
                                </div>
                                <h3 className="font-bold text-slate-800 text-lg truncate">{product.title}</h3>
                                <p className="text-slate-500 text-sm line-clamp-1 mt-1">{product.description}</p>
                            </div>

                            <div className="flex items-center gap-2 w-full md:w-auto justify-end mt-2 md:mt-0">
                                <button onClick={() => handleEdit(product)} className="p-2.5 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition" title="Düzenle">
                                    <Edit2 size={18} />
                                </button>
                                <button onClick={() => handleDelete(product.id)} className="p-2.5 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition" title="Sil">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}