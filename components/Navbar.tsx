"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = pathname === '/';
    const navClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${scrolled || !isHome || isOpen ? 'glass-nav py-3' : 'bg-transparent py-5'}`;
    const textClasses = scrolled || !isHome || isOpen ? 'text-slate-800' : 'text-white';
    const logoClasses = scrolled || !isHome || isOpen ? 'text-slate-900' : 'text-white';
    
    return (
        <nav className={navClasses}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className={`text-2xl font-serif font-extrabold tracking-wide transition-colors ${logoClasses}`} onClick={() => setIsOpen(false)}>
                        EROL<span className={scrolled || !isHome || isOpen ? "text-gold-600" : "text-white/80"}>PERDE</span>
                    </Link>

                    {/* Masaüstü Linkler */}
                    <div className={`hidden md:flex gap-10 font-medium text-[13px] uppercase tracking-[0.15em] ${textClasses}`}>
                        <Link href="/" className="hover:text-gold-500 transition-colors relative group">
                            Anasayfa
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/urunler" className="hover:text-gold-500 transition-colors relative group">
                            Koleksiyon
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/hakkimizda" className="hover:text-gold-500 transition-colors relative group">
                            Kurumsal
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/iletisim" className="hover:text-gold-500 transition-colors relative group">
                            İletişim
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* Mobil Menü Butonu */}
                    <button
                        className={`md:hidden p-2 rounded-lg transition-colors ${textClasses} hover:bg-white/10`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobil Açılır Menü */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200/30 animate-fade-in-up">
                        <div className="flex flex-col space-y-4 pt-4 text-center">
                            <Link href="/" className={`font-medium tracking-widest uppercase text-sm p-3 hover:text-gold-600 ${textClasses}`} onClick={() => setIsOpen(false)}>Anasayfa</Link>
                            <Link href="/urunler" className={`font-medium tracking-widest uppercase text-sm p-3 hover:text-gold-600 ${textClasses}`} onClick={() => setIsOpen(false)}>Koleksiyon</Link>
                            <Link href="/hakkimizda" className={`font-medium tracking-widest uppercase text-sm p-3 hover:text-gold-600 ${textClasses}`} onClick={() => setIsOpen(false)}>Kurumsal</Link>
                            <Link href="/iletisim" className={`font-medium tracking-widest uppercase text-sm p-3 hover:text-gold-600 ${textClasses}`} onClick={() => setIsOpen(false)}>İletişim</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}