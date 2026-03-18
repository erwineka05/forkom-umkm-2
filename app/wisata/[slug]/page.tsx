import Link from 'next/link';

// 1. Tambahkan kata "async" di depan function
// 2. Ubah tipe data params menjadi Promise
export default async function DetailWisata({ params }: { params: Promise<{ slug: string }> }) {
  
  // 3. Tarik data slug dengan perintah await
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Format nama slug agar terlihat rapi (contoh: embung-margodadi -> Embung Margodadi)
  const formatJudul = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="bg-white min-h-screen pb-16">
      
      {/* 🌟 HERO IMAGE DETAIL WISATA */}
      <div className="relative w-full h-[50vh] bg-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Placeholder gambar, nanti diganti gambar asli dari CMS */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2000&auto=format&fit=crop')" }}></div>
        
        <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-12 bg-gradient-to-t from-black/90 to-transparent">
          <div className="max-w-6xl mx-auto">
            <Link href="/wisata" className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white mb-4 transition-colors">
              ← Kembali ke Daftar Wisata
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-md">
              {formatJudul}
            </h1>
            <p className="text-amber-400 font-semibold flex items-center gap-2">
              <span>📍</span> Kalurahan Margodadi, Seyegan, Kab. Sleman
            </p>
          </div>
        </div>
      </div>

      {/* 🌟 KONTEN DETAIL */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Kolom Kiri: Teks Deskripsi (70% lebar) */}
          <div className="lg:col-span-2 prose prose-lg text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Destinasi Ini</h2>
            <p>
              Halaman ini akan memuat penjelasan lengkap, sejarah singkat, dan daya tarik utama dari <strong>{formatJudul}</strong>. Teks ini nantinya akan di-<em>generate</em> otomatis dari file Markdown yang ditulis oleh pengurus desa atau karang taruna pengelola wisata.
            </p>
            <p>
              Pengunjung dapat menikmati suasana pedesaan yang asri, udara yang sejuk, serta keramahan warga lokal yang siap menyambut kedatangan Anda. Tersedia berbagai spot foto yang <em>instagramable</em>.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Galeri / Suasana</h3>
            <div className="grid grid-cols-2 gap-4 not-prose">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center text-gray-400 font-bold">Foto 1</div>
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center text-gray-400 font-bold">Foto 2</div>
            </div>
          </div>

          {/* Kolom Kanan: Kotak Info & Tiket (30% lebar) */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 sticky top-28 shadow-sm">
              <h3 className="font-extrabold text-xl text-gray-900 mb-6 border-b border-gray-200 pb-4">Informasi Wisata</h3>
              
              <ul className="space-y-5 mb-8">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">🎟️</div>
                  <div>
                    <span className="block text-sm text-gray-500 font-medium">Harga Tiket (HTM)</span>
                    <span className="block font-bold text-gray-900 text-lg">Rp 10.000 / Orang</span>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">⏰</div>
                  <div>
                    <span className="block text-sm text-gray-500 font-medium">Jam Buka</span>
                    <span className="block font-bold text-gray-900">08:00 - 17:00 WIB</span>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">✨</div>
                  <div>
                    <span className="block text-sm text-gray-500 font-medium">Fasilitas</span>
                    <span className="block font-bold text-gray-900">Area Parkir, Toilet, Gazebo, Warung Makan</span>
                  </div>
                </li>
              </ul>

              <a 
                href="https://wa.me/6281234567890"
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors mb-3"
              >
                Hubungi Pengelola (WA)
              </a>
              <a 
                href="#"
                className="block w-full text-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 px-4 rounded-xl transition-colors"
              >
                🗺️ Buka di Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}