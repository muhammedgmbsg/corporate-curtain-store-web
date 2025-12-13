import Navbar from '@/components/Navbar';
import { Award, Heart, Target, MapPin, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function HakkimizdaPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero */}
            <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">Hakkımızda</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Erol Perde: 2007'den Bugüne
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Elazığ'da perde ve ev tekstili denince akla gelen güvenilir adres.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* Hikaye */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-800">Tecrübe ve Kalite</h2>
                        <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            **Erol Perde**, 2007 yılında Elazığ'da kurulmuş köklü bir aile işletmesidir. Kurulduğumuz günden bu yana, ev dekorasyonu ve tekstil alanında müşterilerimize en yeni trendleri, en kaliteli malzemelerle sunmayı ilke edindik.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            İzzetpaşa Mahallesi'ndeki mağazamızda; PVC dikey perdelerden ahşap jaluzilere, stor-zebra sistemlerinden motorlu mekanizmalara kadar geniş bir ürün yelpazesi sunuyoruz. Amacımız sadece satış yapmak değil, evinize en uygun çözümü üretmektir.
                        </p>

                        <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl border border-blue-100 mt-4">
                            <MapPin className="text-blue-600" size={32} />
                            <div>
                                <h4 className="font-bold text-slate-900">Yerimiz</h4>
                                <p className="text-gray-600 text-sm">İzzetpaşa Mah. Şehit Teğmen Nadir Ozan Sok. No:24/A Elazığ</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition duration-500 border-4 border-white">
                        <Image
                            src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2000"
                            alt="Perde Detay"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Hizmet Alanlarımız */}
                <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden mb-12">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Neler Yapıyoruz?</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Ev ve ofis dekorasyonunda ihtiyacınız olan tüm perde çeşitleri profesyonel işçilikle sunulmaktadır.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {[
                                "Ev Dekorasyon ve Tekstil Ürünleri",
                                "PVC ve Dikey Perde Sistemleri",
                                "Ahşap ve Metal Jaluzi",
                                "Stor ve Zebra Perde Çeşitleri",
                                "Plicell (Cam Balkon) Perdeleri",
                                "Motorlu ve Kumandalı Mekanizmalar"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition">
                                    <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={24} />
                                    <span className="font-medium text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}