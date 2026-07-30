"use client";

import { useState } from 'react';
import { account } from '@/lib/appwrite';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await account.createEmailPasswordSession(email, password);
            router.push('/admin');
        } catch (error) {
            console.error("Login failed:", error);
            alert('Giriş başarısız! Bilgileri kontrol et.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Admin Girişi</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">E-Posta</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-stone-200 bg-stone-50 p-4 rounded-none outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500 transition-all text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-stone-200 bg-stone-50 p-4 rounded-none outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500 transition-all text-sm"
                            required
                        />
                    </div>
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition"
                    >
                        {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                    </button>
                </form>
            </div>
        </div>
    );
}