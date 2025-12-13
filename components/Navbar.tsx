"use client"; // Tıklama olayı olduğu için bu satır şart

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-extrabold text-slate-900 tracking-tight" onClick={() => setIsOpen(false)}>
                        EROL<span className="text-blue-600">PERDE</span>
                    </Link>

                    {/* Masaüstü Linkler (Mobilde Gizli) */}
                    <div className="hidden md:flex gap-8 text-gray-600 font-medium text-sm uppercase tracking-wide">
                        <Link href="/" className="hover:text-blue-600 transition">Anasayfa</Link>
                        <Link href="/urunler" className="hover:text-blue-600 transition">Koleksiyon</Link>
                        <Link href="/hakkimizda" className="hover:text-blue-600 transition">Kurumsal</Link>
                        <Link href="/iletisim" className="hover:text-blue-600 transition">İletişim</Link>
                    </div>

                    {/* Mobil Menü Butonu */}
                    <button
                        className="md:hidden text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobil Açılır Menü (Sadece isOpen true ise görünür) */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-100 animate-in slide-in-from-top-5 fade-in duration-200">
                        <div className="flex flex-col space-y-4 pt-4">
                            <Link
                                href="/"
                                className="text-gray-600 font-medium hover:text-blue-600 hover:bg-gray-50 p-2 rounded-lg transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Anasayfa
                            </Link>
                            <Link
                                href="/urunler"
                                className="text-gray-600 font-medium hover:text-blue-600 hover:bg-gray-50 p-2 rounded-lg transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Koleksiyon
                            </Link>
                            <Link
                                href="/hakkimizda"
                                className="text-gray-600 font-medium hover:text-blue-600 hover:bg-gray-50 p-2 rounded-lg transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Kurumsal
                            </Link>
                            <Link
                                href="/iletisim"
                                className="text-gray-600 font-medium hover:text-blue-600 hover:bg-gray-50 p-2 rounded-lg transition"
                                onClick={() => setIsOpen(false)}
                            >
                                İletişim
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}