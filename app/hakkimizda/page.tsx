import Navbar from '@/components/Navbar';
import { Award, Heart, Target, MapPin, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function HakkimizdaPage() {
    return (
        <main className="min-h-screen bg-stone-50 font-sans">
            <Navbar />

            {/* Hero */}
            <div className="relative bg-charcoal-900 text-white pt-40 pb-28 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Hakkımızda</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                        Erol Perde: 2007'den Bugüne
                    </h1>
                    <div className="w-16 h-[1px] bg-gold-500 mx-auto mb-8"></div>
                    <p className="text-stone-300 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                        Elazığ'da mimari perde sistemleri ve ev tekstili denince akla gelen güvenilir adres.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24">

                {/* Hikaye */}
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900">Tecrübe ve Kalitenin Kesişimi</h2>
                        
                        <p className="text-stone-600 leading-relaxed text-lg font-light">
                            **Erol Perde**, 2007 yılında Elazığ'da kurulmuş köklü bir aile işletmesidir. Kurulduğumuz günden bu yana, ev dekorasyonu ve tekstil alanında müşterilerimize en yeni trendleri, en kaliteli malzemelerle sunmayı ilke edindik.
                        </p>
                        <p className="text-stone-600 leading-relaxed text-lg font-light">
                            İzzetpaşa Mahallesi'ndeki mağazamızda; PVC dikey perdelerden ahşap jaluzilere, stor-zebra sistemlerinden motorlu mekanizmalara kadar geniş bir ürün yelpazesi sunuyoruz. Amacımız sadece satış yapmak değil, mekanınıza en uygun mimari çözümü üretmektir.
                        </p>

                        <div className="flex items-start gap-6 bg-white p-6 shadow-xl border border-stone-100 mt-8">
                            <div className="p-3 bg-stone-50 rounded-full text-gold-600">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-widest text-charcoal-900 mb-2">Merkez Mağaza</h4>
                                <p className="text-stone-500 font-light text-sm">İzzetpaşa Mah. Şehit Teğmen Nadir Ozan Sok. No:24/A Elazığ</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[500px] w-full bg-stone-100 shadow-2xl overflow-hidden group">
                        <Image
                            src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2000"
                            alt="Perde Detay"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-charcoal-900/10 mix-blend-multiply"></div>
                    </div>
                </div>

                {/* Hizmet Alanlarımız */}
                <div className="bg-charcoal-900 shadow-2xl p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Uzmanlık</span>
                            <h2 className="text-3xl md:text-4xl font-serif mb-6">Neler Yapıyoruz?</h2>
                            <p className="text-stone-300 text-lg mb-8 leading-relaxed font-light">
                                Ev ve ofis dekorasyonunda ihtiyacınız olan tüm perde çeşitleri, profesyonel işçilik ve kaliteli malzeme garantisiyle sunulmaktadır.
                            </p>
                        </div>

                        <div className="grid gap-5">
                            {[
                                "Ev Dekorasyon ve Tekstil Ürünleri",
                                "PVC ve Dikey Perde Sistemleri",
                                "Ahşap ve Metal Jaluzi",
                                "Stor ve Zebra Perde Çeşitleri",
                                "Plicell (Cam Balkon) Perdeleri",
                                "Motorlu ve Kumandalı Mekanizmalar"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
                                    <CheckCircle2 className="text-gold-500 flex-shrink-0" size={20} />
                                    <span className="font-light tracking-wide text-[15px]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}