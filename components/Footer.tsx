import Link from 'next/link';
import { Phone, MapPin, Smartphone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-charcoal-900 text-white border-t border-charcoal-800">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-serif font-bold tracking-wide mb-6">EROL<span className="text-gold-500">PERDE</span></h3>
                        <p className="text-stone-400 font-light text-sm leading-relaxed max-w-sm">
                            2007'den beri Elazığ'da ev dekorasyon, tekstil ve perde sistemlerinde mimari çözümlerin ve kalitenin adresi.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-gold-500 mb-6">Hızlı Erişim</h4>
                        <div className="flex flex-col gap-4 text-stone-400 font-light text-sm">
                            <Link href="/" className="hover:text-gold-500 transition-colors w-fit">Anasayfa</Link>
                            <Link href="/urunler" className="hover:text-gold-500 transition-colors w-fit">Koleksiyonumuz</Link>
                            <Link href="/hakkimizda" className="hover:text-gold-500 transition-colors w-fit">Hakkımızda</Link>
                            <Link href="/iletisim" className="hover:text-gold-500 transition-colors w-fit">İletişim</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-gold-500 mb-6">İletişim</h4>
                        <div className="space-y-4 text-stone-400 font-light text-sm">
                            <div className="flex items-start gap-4">
                                <MapPin size={18} className="text-gold-600 mt-0.5 flex-shrink-0" />
                                <span>İzzetpaşa Mah. Şehit Teğmen Nadir Ozan Sok. No:24/A Elazığ</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone size={18} className="text-gold-600 flex-shrink-0" />
                                <span>0424 233 18 34 (Telefax)</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Smartphone size={18} className="text-gold-600 flex-shrink-0" />
                                <span>0544 520 80 87</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail size={18} className="text-gold-600 flex-shrink-0" />
                                <a href="mailto:erolperde.elazig@gmail.com" className="hover:text-gold-500 transition-colors">erolperde.elazig@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-xs font-light tracking-wide">
                    <div>&copy; {new Date().getFullYear()} Erol Perde. Tüm hakları saklıdır.</div>
                    <div className="uppercase tracking-[0.2em]">Tasarım & Geliştirme</div>
                </div>
            </div>
        </footer>
    );
}