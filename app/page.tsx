import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Ruler, Layers, Blinds, Home as HomeIcon } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Bölümü */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/80 z-10" />
          <div
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop')] 
             bg-cover bg-center"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-100 text-sm font-semibold mb-6 backdrop-blur-md uppercase tracking-wider">
            2007'den Beri Elazığ'da Hizmetinizde
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Evinizin Havasını <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Erol Perde İle Değiştirin</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Ev dekorasyonu, tekstil ve mekanizmalı perde sistemlerinde uzman çözümler.
            PVC, Dikey, Jaluzi ve Stor perde çeşitleriyle mekanlarınıza şıklık katıyoruz.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/urunler"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2 group"
            >
              Ürünleri İncele <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </Link>
            <Link
              href="/iletisim"
              className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/10 transition backdrop-blur-sm"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz Bölümü */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Hizmetlerimiz</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Ev dekorasyonundan ofis sistemlerine kadar geniş ürün yelpazemizle hizmetinizdeyiz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hizmet 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <HomeIcon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Ev Dekorasyon & Tekstil</h3>
              <p className="text-gray-500 leading-relaxed">Modern ev tekstili ürünleri ve dekoratif perde çözümleriyle yaşam alanlarınızı güzelleştiriyoruz.</p>
            </div>

            {/* Hizmet 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Layers size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Mekanizmalı Sistemler</h3>
              <p className="text-gray-500 leading-relaxed">Motorlu kumandalı stor ve zebra perdeler ile teknolojiyi konforla buluşturuyoruz.</p>
            </div>

            {/* Hizmet 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Blinds size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">PVC & Jaluzi Sistemleri</h3>
              <p className="text-gray-500 leading-relaxed">Ofis ve iş yerleri için dayanıklı PVC dikey perdeler, ahşap ve metal jaluzi seçenekleri.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımızda Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-slate-900/20"></div>
            {/* Buraya dükkanın veya temsili bir görsel gelebilir */}
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000')] bg-cover bg-center"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Elazığ'da Kalitenin Adresi: <span className="text-blue-600">Erol Perde</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              2007 yılında başladığımız bu yolculukta, İzzetpaşa Mahallesi'ndeki mağazamızda müşterilerimize en kaliteli perde ve tekstil ürünlerini sunuyoruz.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium"><ShieldCheck className="text-green-500" /> Kaliteli Malzeme Garantisi</li>
              <li className="flex items-center gap-3 text-gray-700 font-medium"><Ruler className="text-blue-500" /> Ücretsiz Ölçü ve Keşif</li>
              <li className="flex items-center gap-3 text-gray-700 font-medium"><Star className="text-yellow-500" /> Müşteri Memnuniyeti Odaklı Hizmet</li>
            </ul>
            <Link href="/hakkimizda" className="text-blue-600 font-bold hover:underline inline-flex items-center">
              Hikayemizi Okuyun <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}