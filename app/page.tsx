import Link from 'next/link';

// ==========================================
// DATA DUMMY (Tanpa Badge Promo)
// ==========================================
const produkUnggulan = [
  { id: 1, kategori: 'KULINER', nama: 'Telur Asin Tiara Pilihan', harga: 'Rp 5.000', gambar: 'bg-orange-100 text-orange-400' },
  { id: 2, kategori: 'KULINER', nama: 'Brownies Lumer Margodadi (Box)', harga: 'Rp 35.000', gambar: 'bg-amber-100 text-amber-500' },
  { id: 3, kategori: 'KERAJINAN', nama: 'Tas Anyaman Bambu Eksklusif', harga: 'Rp 75.000', gambar: 'bg-green-100 text-green-500' },
  { id: 4, kategori: 'KULINER', nama: 'Sambal Bawang Qu Botol Kaca', harga: 'Rp 15.000', gambar: 'bg-red-100 text-red-500' },
  { id: 5, kategori: 'PRODUK', nama: 'Kopi Bubuk Asli Lereng Merapi', harga: 'Rp 25.000', gambar: 'bg-stone-200 text-stone-500' },
  { id: 6, kategori: 'KERAJINAN', nama: 'Batik Tulis Motif Margodadi', harga: 'Rp 150.000', gambar: 'bg-blue-100 text-blue-500' },
];

const wisataAndalan = [
  { id: 1, nama: 'Embung Margodadi', desc: 'Nikmati senja dengan pemandangan air dan udara pedesaan yang asri.', img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop' },
  { id: 2, nama: 'Desa Wisata Budaya', desc: 'Melihat langsung proses pembuatan kerajinan dan kesenian lokal.', img: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=800&auto=format&fit=crop' },
];

const beritaTerbaru = [
  { id: 1, tanggal: '15 Mar 2026', judul: 'Pelatihan Digital Marketing untuk UMKM Margodadi' },
  { id: 2, tanggal: '10 Mar 2026', judul: 'Kunjungan Bupati Sleman ke Sentra Kerajinan Bambu' },
  { id: 3, tanggal: '05 Mar 2026', judul: 'Festival Kuliner Desa Sukses Digelar, Omzet Meningkat' },
];

export default function Home() {
  return (
    <div className="w-full bg-gray-50 pb-12">
      
      {/* 🌟 HERO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533626904905-cc52fd99285e?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            FORKOM UMKM <br/> <span className="text-amber-400">Margodadi</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl drop-shadow-md">
            Menghadirkan etalase produk unggulan, wisata, dan kabar terbaru langsung dari warga lokal.
          </p>
        </div>
      </section>

      {/* 🌟 URUTAN 1: PRODUK UMKM */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Pilihan Terlaris</h2>
            <p className="text-gray-500 text-sm mt-1">Produk UMKM favorit warga</p>
          </div>
          <Link href="/kuliner" className="text-[#00aa5b] font-bold text-sm hover:bg-green-50 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1">
            Lihat Semua
          </Link>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {produkUnggulan.map((produk) => (
            <div key={produk.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-all">
              
              {/* Area Gambar (Edge-to-edge) tanpa badge */}
              <div className={`w-full aspect-square relative ${produk.gambar} flex items-center justify-center`}>
                <span className="font-bold text-xs opacity-50">FOTO</span>
              </div>

              {/* Area Teks & Harga */}
              <div className="p-3 flex flex-col flex-grow">
                {/* Kategori dikembalikan ke atas judul */}
                <span className="text-[10px] font-bold text-amber-600 tracking-wider uppercase mb-1">
                  {produk.kategori}
                </span>
                
                <h3 className="font-semibold text-gray-900 text-[13px] leading-snug mb-3 line-clamp-2">
                  {produk.nama}
                </h3>
                
                {/* Harga dan Tombol Beli di bawah */}
                <div className="mt-auto flex items-center justify-between pt-1">
                  <span className="font-bold text-gray-900 text-sm">{produk.harga}</span>
                  
                  {/* Tombol "+" Ikonik warna Hijau Gojek */}
                  <button className="bg-[#00aa5b] text-white w-7 h-7 flex items-center justify-center rounded-full font-bold shadow-sm hover:bg-[#008f4c] active:scale-95 transition-all">
                    +
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 🌟 URUTAN 2: WISATA */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">DESTINASI</h2>
          <h3 className="text-3xl font-extrabold text-gray-900 mb-10">
            Jelajahi Pesona <span className="text-amber-600">Margodadi</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {wisataAndalan.map((wisata) => (
              <Link href="/wisata" key={wisata.id} className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group block">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${wisata.img}')` }}></div>
                <div className="absolute bottom-0 left-0 p-6 z-20 text-left w-full bg-gradient-to-t from-black/90 to-transparent">
                  <h4 className="text-white text-xl md:text-2xl font-bold mb-1">{wisata.nama}</h4>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{wisata.desc}</p>
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Lihat Detail →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 URUTAN 3: BERITA TERBARU */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Kabar Terbaru</h2>
            <p className="text-gray-500 text-sm mt-1">Informasi dan kegiatan seputar Forkom UMKM</p>
          </div>
          <Link href="/berita" className="text-amber-600 font-semibold text-sm hover:underline flex items-center gap-1">
            Indeks Berita <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beritaTerbaru.map((berita) => (
            <Link href="/berita" key={berita.id} className="group bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all">
              <div className="text-xs text-amber-600 font-bold mb-2">{berita.tanggal}</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-3">
                {berita.judul}
              </h3>
              <span className="text-sm text-gray-500 font-medium">Baca selengkapnya →</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}