import Link from 'next/link';

// Data Dummy Sementara
const wisataList = [
  { 
    id: 1, 
    slug: 'embung-margodadi', 
    nama: 'Embung Margodadi', 
    htm: 'Gratis', 
    fasilitas: 'Parkir, Toilet, Gazebo, Warung',
    desc: 'Nikmati senja dengan pemandangan air dan udara pedesaan yang asri. Sangat cocok untuk wisata keluarga dan bersepeda di sore hari.',
    img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    slug: 'desa-wisata-budaya', 
    nama: 'Desa Wisata & Budaya', 
    htm: 'Mulai Rp 10.000', 
    fasilitas: 'Tour Guide, Homestay, Sanggar',
    desc: 'Melihat dan mencoba langsung proses pembuatan kerajinan bambu, batik, serta menikmati kesenian lokal warisan leluhur Margodadi.',
    img: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    slug: 'agrowisata-kebun-salak', 
    nama: 'Agrowisata Kebun Salak', 
    htm: 'Rp 15.000 (Makan Sepuasnya)', 
    fasilitas: 'Area Kebun, Mushola, Pusat Oleh-oleh',
    desc: 'Petik buah salak segar langsung dari pohonnya. Edukasi pertanian yang menyenangkan untuk anak-anak dan rombongan sekolah.',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop' 
  }
];

export default function DaftarWisata() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Halaman */}
        <div className="mb-12 text-center md:text-left border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Destinasi Wisata</h1>
          <p className="text-gray-500 max-w-2xl">
            Jelajahi keindahan alam, budaya, dan agrowisata di Kalurahan Margodadi. Rencanakan liburan akhir pekan Anda bersama keluarga di sini.
          </p>
        </div>

        {/* Grid Wisata (Lebih lebar & fokus gambar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wisataList.map((wisata) => (
            <Link href={`/wisata/${wisata.slug}`} key={wisata.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300">
              
              {/* Gambar Cover */}
              <div className="w-full aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${wisata.img}')` }}></div>
                
                {/* Badge HTM */}
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  🎟️ {wisata.htm}
                </div>
              </div>

              {/* Konten Teks */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors leading-tight">
                  {wisata.nama}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  {wisata.desc}
                </p>
                
                {/* Fasilitas singkat */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-1 block">Fasilitas Utama:</span>
                  <p className="text-sm text-gray-600 truncate">{wisata.fasilitas}</p>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}