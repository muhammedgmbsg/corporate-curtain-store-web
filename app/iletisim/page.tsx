"use client"; // Bu satır etkileşim (buton, state) olduğu için şart

import Navbar from '@/components/Navbar';
import { MapPin, Phone, Mail, Send, Smartphone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function IletisimPage() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const inputClasses = "w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-4 outline-none transition";

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // FormSubmit AJAX API kullanımı
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
                (e.target as HTMLFormElement).reset(); // Formu temizle
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
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <div className="bg-slate-900 text-white py-20 text-center px-4">
                <h1 className="text-4xl font-bold mb-4">Bize Ulaşın</h1>
                <p className="text-gray-300 max-w-xl mx-auto">Erol Perde olarak Elazığ'da hizmetinizdeyiz. Keşif talepleriniz ve siparişleriniz için bize yazın.</p>
            </div>

            <div className="max-w-6xl mx-auto px-4 -mt-10 mb-20">
                <div className="grid md:grid-cols-3 gap-8">

                    {/* SOL Taraf: İletişim Bilgileri */}
                    <div className="bg-slate-800 text-white p-10 rounded-2xl shadow-xl h-fit">
                        <h3 className="text-2xl font-bold mb-8">İletişim Bilgileri</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg text-blue-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Adres</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        İzzetpaşa Mah. Şehit Teğmen <br /> Nadir Ozan Sok. No:24/A <br /> Elazığ
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg text-blue-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Telefax</h4>
                                    <a href="tel:04242331834" className="text-gray-300 hover:text-white transition">0424 233 18 34</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg text-blue-400">
                                    <Smartphone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">GSM</h4>
                                    <a href="tel:05445208087" className="text-gray-300 hover:text-white transition">0544 520 80 87</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg text-blue-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">E-Posta</h4>
                                    <a href="mailto:erolperde.elazig@gmail.com" className="text-gray-300 hover:text-white transition break-all">
                                        erolperde.elazig@gmail.com
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* SAĞ Taraf: İletişim Formu */}
                    <div className="md:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">Mesaj Gönderin</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-gray-700">Adınız</label>
                                    <input type="text" name="Ad" placeholder="Adınız" className={inputClasses} required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-gray-700">Soyadınız</label>
                                    <input type="text" name="Soyad" placeholder="Soyadınız" className={inputClasses} required />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-semibold text-gray-700">E-Posta Adresiniz</label>
                                <input type="email" name="Email" placeholder="ornek@email.com" className={inputClasses} required />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-semibold text-gray-700">Mesajınız</label>
                                <textarea name="Mesaj" placeholder="Ürünler veya keşif hakkında..." className={`${inputClasses} h-40 resize-none`} required></textarea>
                            </div>

                            {/* Başarı Mesajı */}
                            {status === 'success' && (
                                <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3 border border-green-200">
                                    <CheckCircle size={24} />
                                    <div>
                                        <p className="font-bold">Mesajınız başarıyla gönderildi!</p>
                                        <p className="text-sm">En kısa sürede size dönüş yapacağız.</p>
                                    </div>
                                </div>
                            )}

                            {/* Hata Mesajı */}
                            {status === 'error' && (
                                <div className="bg-red-50 text-red-700 p-4 rounded-xl flex items-center gap-3 border border-red-200">
                                    <AlertCircle size={24} />
                                    <div>
                                        <p className="font-bold">Mesaj gönderilemedi!</p>
                                        <p className="text-sm">Lütfen internet bağlantınızı kontrol edip tekrar deneyin.</p>
                                    </div>
                                </div>
                            )}

                            <button
                                disabled={loading}
                                type="submit"
                                className="bg-blue-600 text-white py-4 px-8 rounded-xl font-bold hover:bg-blue-700 transition flex items-center gap-2 shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} /> Gönderiliyor...
                                    </>
                                ) : (
                                    <>
                                        Gönder <Send size={18} />
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