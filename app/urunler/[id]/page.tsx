"use client";

import { useState, useEffect, use } from 'react';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, Phone, ShieldCheck } from 'lucide-react';

interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    images: string[];
}

export default function UrunDetayPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        async function fetchProduct() {
            const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
            if (!error && data) setProduct(data);
            setLoading(false);
        }
        fetchProduct();
    }, [id]);

    if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-500">Yükleniyor...</div>;
    if (!product) return <div className="text-center py-20 text-red-500">Ürün bulunamadı.</div>;

    const images = product.images || [];
    const mainImage = images.length > 0 ? images[activeImageIndex] : null;

    return (
        <main className="min-h-screen bg-white font-sans">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-10">
                <Link href="/urunler" className="inline-flex items-center text-gray-500 hover:text-slate-900 mb-8 transition font-medium text-sm">
                    <ArrowLeft size={18} className="mr-2" /> Tüm Ürünlere Dön
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* --- SOL: GALERİ --- */}
                    <div className="space-y-6">
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100 group">
                            {mainImage ? (
                                <Image
                                    src={mainImage}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition duration-500"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">Resim Yok</div>
                            )}

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white text-slate-800 shadow-lg transition opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={() => setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full hover:bg-white text-slate-800 shadow-lg transition opacity-0 group-hover:opacity-100"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}
                        </div>

                        {images.length > 1 && (
                            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImageIndex(idx)}
                                        className={`relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all
                                    ${activeImageIndex === idx ? 'border-blue-600 ring-2 ring-blue-100 opacity-100 scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                    >
                                        <Image src={img} alt={`thumb-${idx}`} fill className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* --- SAĞ: BİLGİLER --- */}
                    <div className="flex flex-col py-4">
                        <div className="mb-6">
                            <span className="text-blue-600 font-bold text-sm tracking-wider uppercase mb-2 block">{product.category}</span>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">{product.title}</h1>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-gray-200 pl-4">
                                {product.description}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                            <div className="flex items-center gap-3 mb-2 text-slate-700 font-medium">
                                <ShieldCheck className="text-emerald-500" size={20} /> Kalite Garantisi
                            </div>
                            <p className="text-sm text-gray-500">Tüm ürünlerimiz 1. sınıf kumaştan üretilip, kalite kontrol testlerinden geçmiştir.</p>
                        </div>

                        <div className="mt-auto pt-8 border-t border-gray-100">
                            <Link
                                href="/iletisim"
                                className="w-full bg-slate-900 text-white px-8 py-5 rounded-xl font-bold hover:bg-blue-600 transition shadow-xl shadow-slate-200 flex items-center justify-center gap-3 text-lg"
                            >
                                <Phone size={24} /> Fiyat ve Sipariş İçin Arayın
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}