import Navbar from '@/components/Navbar';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';

async function getProducts() {
    const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    return data || [];
}

export default async function UrunlerPage() {
    const products = await getProducts();

    return (
        <main className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            <div className="bg-white border-b border-gray-200 py-16 text-center">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Koleksiyonumuz</h1>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">Yaşam alanlarınız için özenle tasarlanmış, her tarza uygun perde modelleri.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group flex flex-col h-full">
                            <div className="relative h-72 w-full bg-gray-100 overflow-hidden">
                                <Image
                                    src={product.images && product.images[0] ? product.images[0] : '/placeholder.png'}
                                    alt={product.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wide shadow-sm">
                                    {product.category}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-lg font-bold text-slate-800 mb-2 line-clamp-1 group-hover:text-blue-600 transition">{product.title}</h2>
                                <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-1 leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="pt-4 border-t border-gray-100 mt-auto">
                                    <Link
                                        href={`/urunler/${product.id}`}
                                        className="block w-full text-center text-sm font-semibold text-white bg-slate-900 px-4 py-3 rounded-xl hover:bg-blue-600 transition"
                                    >
                                        Detaylı İncele
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {products.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-32 text-gray-400">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-3xl">📭</div>
                        <h3 className="text-xl font-medium text-gray-600">Henüz ürün bulunmuyor</h3>
                    </div>
                )}
            </div>
        </main>
    );
}