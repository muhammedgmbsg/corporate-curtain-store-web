import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { databases, databaseId, collectionId, Query } from '@/lib/appwrite';
import { ArrowRight } from 'lucide-react';

export const revalidate = 0;

interface Product {
    id: string;
    title: string;
    category: string;
    images: string[];
}

async function getProducts(): Promise<Product[]> {
    try {
        const response = await databases.listDocuments(
            databaseId,
            collectionId,
            [Query.orderDesc('$createdAt')]
        );
        
        return response.documents.map(doc => ({
            id: doc.$id,
            title: doc.title,
            category: doc.category,
            images: doc.images || []
        }));
    } catch (error) {
        console.error("Veri çekme hatası:", error);
        return [];
    }
}

export default async function UrunlerPage() {
    const products = await getProducts();

    return (
        <main className="min-h-screen bg-stone-50 font-sans">
            <Navbar />
            
            {/* Header Alanı */}
            <div className="bg-charcoal-900 text-white pt-40 pb-20 px-6 text-center">
                <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Erol Perde</span>
                <h1 className="text-4xl md:text-6xl font-serif mb-6">Koleksiyonumuz</h1>
                <div className="w-16 h-[1px] bg-gold-500 mx-auto"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24">
                {products.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-stone-500 text-lg font-light">Henüz koleksiyonumuza ürün eklenmemiş.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {products.map((product) => (
                            <Link href={`/urunler/${product.id}`} key={product.id} className="group cursor-pointer">
                                <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-6">
                                    <Image 
                                        src={product.images && product.images[0] ? product.images[0] : '/placeholder.png'} 
                                        alt={product.title} 
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/30 transition-colors duration-500 flex items-center justify-center">
                                        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 text-white font-medium uppercase tracking-widest text-sm">
                                            İncele <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <span className="text-gold-600 text-xs font-bold uppercase tracking-widest block mb-2">{product.category}</span>
                                    <h3 className="text-2xl font-serif text-charcoal-900 group-hover:text-gold-600 transition-colors">{product.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}