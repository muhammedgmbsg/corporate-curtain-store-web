import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, ShieldCheck, Ruler, Layers, Blinds, Home as HomeIcon } from 'lucide-react';
import { products } from '@/lib/products';

export default function Home() {
    const latestProducts = products.slice(0, 3);

    return (
        <main className="min-h-screen bg-stone-50 font-sans">
            <Navbar />

            {/* Premium Hero Bölümü */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-charcoal-900/60 z-10" />
                    <div
                        className="w-full h-full bg-[url('/site/hero-1.jpg')]
             bg-cover bg-center scale-105 animate-fade-in"
                        style={{ animationDuration: '3s' }}
                    />
                </div>

                <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20 animate-fade-in-up">
                    <span className="inline-block py-1.5 px-6 border border-gold-500/50 text-gold-500 text-xs font-semibold mb-8 uppercase tracking-[0.3em]">
                        2007'den Beri Elazığ'da
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
                        Evinizin <span className="text-gold-500 italic">Ruhu</span>
                    </h1>
                    <p className="text-lg md:text-xl text-stone-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                        Modern iç mimari ile lüks dokuları buluşturan perde ve dekorasyon çözümleriyle yaşam alanlarınıza yeniden hayat verin.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/urunler"
                            className="bg-gold-500 text-charcoal-900 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gold-600 transition-colors flex items-center justify-center gap-3 w-full sm:w-auto"
                        >
                            Koleksiyonu Keşfet
                        </Link>
                        <Link
                            href="/iletisim"
                            className="bg-transparent border border-white/50 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors w-full sm:w-auto"
                        >
                            İletişime Geç
                        </Link>
                    </div>
                </div>
            </section>

            {/* Son Eklenen Ürünler Vitrini */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <span className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Vitrin</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900">En Yeni Tasarımlar</h2>
                        </div>
                        <Link href="/urunler" className="text-charcoal-800 font-medium hover:text-gold-600 transition-colors flex items-center gap-2 mt-6 md:mt-0 pb-2 border-b-2 border-transparent hover:border-gold-600">
                            Tüm Koleksiyonu Gör <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {latestProducts.map((product) => (
                            <Link href={`/urunler/${product.id}`} key={product.id} className="group cursor-pointer">
                                <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-6">
                                    <Image
                                        src={product.images && product.images[0] ? product.images[0] : '/placeholder.png'}
                                        alt={product.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-colors duration-500" />
                                </div>
                                <span className="text-gold-600 text-xs font-bold uppercase tracking-widest">{product.category}</span>
                                <h3 className="text-xl font-serif text-charcoal-900 mt-2 group-hover:text-gold-600 transition-colors">{product.title}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hizmetlerimiz Bölümü */}
            <section className="py-32 bg-stone-50 border-t border-stone-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Uzmanlık Alanlarımız</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">Mekana Özel Çözümler</h2>
                        <div className="h-[1px] w-24 bg-gold-500 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Hizmet 1 */}
                        <div className="bg-white p-12 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-stone-100">
                            <div className="w-16 h-16 bg-stone-50 text-gold-600 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
                                <HomeIcon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif mb-4 text-charcoal-900">Ev Tekstili</h3>
                            <p className="text-stone-500 leading-relaxed font-light">Modern ev tekstili ürünleri ve dekoratif tül/fon perde çözümleriyle yaşam alanlarınıza lüks bir dokunuş katıyoruz.</p>
                        </div>

                        {/* Hizmet 2 */}
                        <div className="bg-white p-12 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-stone-100">
                            <div className="w-16 h-16 bg-stone-50 text-gold-600 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
                                <Layers size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif mb-4 text-charcoal-900">Mekanizmalı Sistemler</h3>
                            <p className="text-stone-500 leading-relaxed font-light">Motorlu kumandalı stor ve zebra perdeler ile teknolojiyi konforla buluşturarak modern çözümler üretiyoruz.</p>
                        </div>

                        {/* Hizmet 3 */}
                        <div className="bg-white p-12 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-stone-100">
                            <div className="w-16 h-16 bg-stone-50 text-gold-600 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
                                <Blinds size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif mb-4 text-charcoal-900">Mimari Sistemler</h3>
                            <p className="text-stone-500 leading-relaxed font-light">Ofis, kış bahçesi ve iş yerleri için dayanıklı PVC, Plicell, ahşap ve metal jaluzi seçenekleri sunuyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hakkımızda Teaser */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <div className="relative h-[600px] overflow-hidden group">
                        <div className="w-full h-full bg-[url('/site/about-teaser.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"></div>
                        <div className="absolute inset-0 bg-charcoal-900/10 mix-blend-multiply"></div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-stone-100 -z-10"></div>
                    </div>
                    <div className="pl-4 md:pl-10 border-l border-gold-500/30">
                        <span className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Hakkımızda</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-8 leading-tight">Elazığ'da Kalitenin ve<br/>Zarafetin Adresi</h2>
                        <p className="text-stone-600 text-lg leading-relaxed mb-8 font-light">
                            2007 yılında başladığımız bu yolculukta, İzzetpaşa Mahallesi'ndeki mağazamızda müşterilerimize en kaliteli perde ve tekstil ürünlerini sunuyoruz. Her pencere, bizim için yeni bir tuvaldir.
                        </p>
                        <ul className="space-y-6 mb-12">
                            <li className="flex items-center gap-4 text-charcoal-800">
                                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-gold-600"><ShieldCheck size={20} /></div>
                                <span className="font-medium tracking-wide">1. Sınıf Kalite Malzeme Garantisi</span>
                            </li>
                            <li className="flex items-center gap-4 text-charcoal-800">
                                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-gold-600"><Ruler size={20} /></div>
                                <span className="font-medium tracking-wide">Uzman Ekiple Ücretsiz Keşif & Ölçü</span>
                            </li>
                            <li className="flex items-center gap-4 text-charcoal-800">
                                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-gold-600"><Star size={20} /></div>
                                <span className="font-medium tracking-wide">15 Yıllık Tecrübe ve Müşteri Memnuniyeti</span>
                            </li>
                        </ul>
                        <Link href="/hakkimizda" className="text-gold-600 font-bold uppercase tracking-widest text-sm hover:text-charcoal-900 transition-colors inline-flex items-center group">
                            Hikayemizi Okuyun <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}