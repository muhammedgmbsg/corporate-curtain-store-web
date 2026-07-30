"use client";

import Navbar from '@/components/Navbar';
import { MapPin, Phone, Mail, Send, Smartphone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function IletisimPage() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const inputClasses = "w-full bg-stone-50 border border-stone-200 text-charcoal-900 text-sm rounded-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500 block p-4 outline-none transition-all";

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/erolperde.elazig@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    _subject: "Yeni Web Sitesi Mesajı! (Erol Perde)",
                })
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />

            {/* Header */}
            <div className="bg-charcoal-900 text-white pt-40 pb-28 px-6 text-center">
                <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">İletişim</span>
                <h1 className="text-4xl md:text-5xl font-serif mb-6">Bize Ulaşın</h1>
                <div className="w-16 h-[1px] bg-gold-500 mx-auto mb-8"></div>
                <p className="text-stone-300 max-w-xl mx-auto font-light leading-relaxed">Projeleriniz, ölçü ve keşif talepleriniz için uzman ekibimizle iletişime geçin.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-16 mb-32">
                <div className="grid md:grid-cols-3 gap-12">

                    {/* SOL Taraf: İletişim Bilgileri */}
                    <div className="bg-white p-12 shadow-2xl border border-stone-100 h-fit">
                        <h3 className="text-2xl font-serif text-charcoal-900 mb-8">İletişim Bilgileri</h3>

                        <div className="space-y-10">
                            <div className="flex items-start gap-6 group">
                                <div className="p-3 bg-stone-50 rounded-full text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-widest text-charcoal-900 mb-2">Adres</h4>
                                    <p className="text-stone-500 font-light leading-relaxed">
                                        İzzetpaşa Mah. Şehit Teğmen <br /> Nadir Ozan Sok. No:24/A <br /> Elazığ
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-3 bg-stone-50 rounded-full text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-widest text-charcoal-900 mb-2">Telefax</h4>
                                    <a href="tel:04242331834" className="text-stone-500 font-light hover:text-gold-600 transition-colors">0424 233 18 34</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-3 bg-stone-50 rounded-full text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                                    <Smartphone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-widest text-charcoal-900 mb-2">GSM</h4>
                                    <a href="tel:05445208087" className="text-stone-500 font-light hover:text-gold-600 transition-colors">0544 520 80 87</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-3 bg-stone-50 rounded-full text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-widest text-charcoal-900 mb-2">E-Posta</h4>
                                    <a href="mailto:erolperde.elazig@gmail.com" className="text-stone-500 font-light hover:text-gold-600 transition-colors break-all">
                                        erolperde.elazig@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SAĞ Taraf: İletişim Formu */}
                    <div className="md:col-span-2 bg-white p-12 shadow-xl border border-stone-100 mt-16 md:mt-0">
                        <h3 className="text-3xl font-serif text-charcoal-900 mb-8">Mesaj Gönderin</h3>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block mb-3 text-xs font-bold uppercase tracking-widest text-stone-500">Adınız</label>
                                    <input type="text" name="Ad" placeholder="Adınız" className={inputClasses} required />
                                </div>
                                <div>
                                    <label className="block mb-3 text-xs font-bold uppercase tracking-widest text-stone-500">Soyadınız</label>
                                    <input type="text" name="Soyad" placeholder="Soyadınız" className={inputClasses} required />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-3 text-xs font-bold uppercase tracking-widest text-stone-500">E-Posta Adresiniz</label>
                                <input type="email" name="Email" placeholder="ornek@email.com" className={inputClasses} required />
                            </div>

                            <div>
                                <label className="block mb-3 text-xs font-bold uppercase tracking-widest text-stone-500">Mesajınız</label>
                                <textarea name="Mesaj" placeholder="Mimari çözümler, ürünler veya keşif hakkında..." className={`${inputClasses} h-40 resize-none`} required></textarea>
                            </div>

                            {status === 'success' && (
                                <div className="bg-stone-50 text-gold-600 p-6 flex items-center gap-4 border border-stone-200">
                                    <CheckCircle size={24} />
                                    <div>
                                        <p className="font-bold tracking-wide">Mesajınız başarıyla iletildi.</p>
                                        <p className="text-sm font-light text-stone-500 mt-1">Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.</p>
                                    </div>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="bg-red-50 text-red-700 p-6 flex items-center gap-4 border border-red-200">
                                    <AlertCircle size={24} />
                                    <div>
                                        <p className="font-bold tracking-wide">Gönderim Başarısız</p>
                                        <p className="text-sm font-light mt-1">Lütfen internet bağlantınızı kontrol edip tekrar deneyin.</p>
                                    </div>
                                </div>
                            )}

                            <button
                                disabled={loading}
                                type="submit"
                                className="bg-charcoal-900 text-white py-5 px-10 text-sm font-bold uppercase tracking-widest hover:bg-gold-600 transition-colors flex items-center justify-center gap-3 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} /> GÖNDERİLİYOR...
                                    </>
                                ) : (
                                    <>
                                        MESAJI GÖNDER <Send size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}