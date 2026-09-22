import { products, getProductById } from '@/lib/products';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-stone-50 font-sans">
            <Navbar />
            
            {/* Minimal Header Space for glassy navbar */}
            <div className="pt-32 pb-12 px-6">
                <div className="max-w-7xl mx-auto flex items-center text-sm font-medium text-stone-400 uppercase tracking-widest">
                    <Link href="/urunler" className="hover:text-gold-600 transition-colors">Koleksiyon</Link>
                    <ChevronRight size={14} className="mx-2" />
                    <span className="text-charcoal-900">{product.title}</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
                    
                    {/* Sol: Resim Galerisi */}
                    <div className="space-y-6">
                        <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden shadow-xl">
                            <Image
                                src={product.images && product.images[0] ? product.images[0] : '/placeholder.png'}
                                alt={product.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        
                        {/* Eğer birden fazla resim varsa alt galeride göster */}
                        {product.images && product.images.length > 1 && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {product.images.slice(1).map((img: string, index: number) => (
                                    <div key={index} className="relative aspect-square bg-stone-100 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                                        <Image
                                            src={img}
                                            alt={`${product.title} - Görsel ${index + 2}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sağ: Ürün Detayları */}
                    <div className="sticky top-40 pt-8 md:pt-0">
                        <span className="text-gold-600 font-bold uppercase tracking-[0.2em] text-sm block mb-4">
                            {product.category}
                        </span>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal-900 mb-8 leading-tight">
                            {product.title}
                        </h1>
                        
                        <div className="h-[1px] w-full bg-stone-200 mb-8"></div>
                        
                        <div className="prose prose-stone max-w-none text-stone-600 font-light leading-relaxed mb-12">
                            {product.description ? (
                                <p className="text-lg whitespace-pre-wrap">{product.description}</p>
                            ) : (
                                <p className="italic text-stone-400">Bu ürün için henüz bir açıklama girilmemiş.</p>
                            )}
                        </div>
                        
                        <div className="space-y-6">
                            <Link 
                                href="/iletisim"
                                className="block w-full bg-charcoal-900 text-white text-center py-5 uppercase tracking-widest text-sm font-bold hover:bg-gold-600 transition-colors"
                            >
                                Bilgi ve Teklif Alın
                            </Link>
                            <Link 
                                href="/urunler"
                                className="flex items-center justify-center gap-2 w-full border border-stone-300 text-charcoal-900 text-center py-5 uppercase tracking-widest text-sm font-bold hover:bg-stone-100 transition-colors"
                            >
                                <ArrowLeft size={16} /> Koleksiyona Dön
                            </Link>
                        </div>
                        
                        {/* Zarif Teslimat / Bilgi Notu */}
                        <div className="mt-12 bg-white p-6 border border-stone-100 shadow-sm">
                            <h4 className="font-serif text-charcoal-900 text-lg mb-2">Mimari Dokunuş</h4>
                            <p className="text-stone-500 font-light text-sm leading-relaxed">
                                Tüm ürünlerimiz mekanınıza özel olarak projelendirilip, Elazığ içi ücretsiz keşif ve montaj hizmetiyle sunulmaktadır.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}