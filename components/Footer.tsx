import Link from 'next/link';
import { Phone, MapPin, Smartphone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">EROL<span className="text-blue-500">PERDE</span></h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            2007'den beri Elazığ'da ev dekorasyon, tekstil ve perde sistemlerinde kaliteli hizmetin adresi.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Hızlı Erişim</h4>
                        <div className="flex flex-col gap-2 text-gray-400 text-sm">
                            <Link href="/" className="hover:text-blue-400 transition">Anasayfa</Link>
                            <Link href="/urunler" className="hover:text-blue-400 transition">Ürünlerimiz</Link>
                            <Link href="/hakkimizda" className="hover:text-blue-400 transition">Hakkımızda</Link>
                            <Link href="/iletisim" className="hover:text-blue-400 transition">İletişim</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">İletişim</h4>
                        <div className="space-y-3 text-gray-400 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>İzzetpaşa Mah. Şehit Teğmen Nadir Ozan Sok. No:24/A Elazığ</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                                <span>0424 233 18 34 (Telefax)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Smartphone size={18} className="text-blue-500 flex-shrink-0" />
                                <span>0544 520 80 87</span>
                            </div>
                            {/* Mail Eklendi */}
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                                <a href="mailto:erolperde.elazig@gmail.com" className="hover:text-white transition">erolperde.elazig@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-xs">
                    &copy; {new Date().getFullYear()} Erol Perde. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
}