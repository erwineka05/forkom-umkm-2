import Link from 'next/link';

// Data Dummy Sementara
const daftarBerita = [
  {
    id: 1,
    slug: 'pelatihan-digital-marketing-umkm',
    tanggal: '15 Mar 2026',
    kategori: 'Pelatihan',
    judul: 'Pelatihan Digital Marketing untuk UMKM Margodadi',
    kutipan: 'Forkom UMKM Margodadi bekerja sama dengan praktisi digital mengadakan pelatihan pemasaran melalui media sosial dan marketplace.',
    gambar: 'bg-blue-100 text-blue-500'
  },
  {
    id: 2,
    slug: 'kunjungan-bupati-sleman',
    tanggal: '10 Mar 2026',
    kategori: 'Kegiatan',
    judul: 'Kunjungan Bupati Sleman ke Sentra Kerajinan Bambu',
    kutipan: 'Bupati Sleman meninjau langsung proses produksi kerajinan bambu dan berdialog dengan para pengrajin lokal di Margodadi.',
    gambar: 'bg-amber-100 text-amber-500'
  },
  {
    id: 3,
    slug: 'festival-kuliner-desa-sukses',
    tanggal: '05 Mar 2026',
    kategori: 'Event',
    judul: 'Festival Kuliner Desa Sukses Digelar, Omzet Meningkat',
    kutipan: 'Antusiasme warga sangat tinggi pada Festival Kuliner Margodadi minggu lalu. Tercatat puluhan UMKM mencetak rekor penjualan.',
    gambar: 'bg-green-100 text-green-500'
  },
  {
    id: 4,
    slug: 'pembagian-sertifikat-halal',
    tanggal: '28 Feb 2026',
    kategori: 'Informasi',
    judul: 'Penyerahan Sertifikat Halal Gratis Tahap 1',
    kutipan: 'Sebanyak 25 pelaku usaha kuliner di Margodadi resmi menerima sertifikat halal dari Kemenag untuk meningkatkan kepercayaan konsumen.',
    gambar: 'bg-purple-100 text-purple-500'
  }
];

export default function DaftarBerita() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Halaman */}
        <div className="mb-12 text-center md:text-left border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Kabar Terbaru</h1>
          <p className="text-gray-500 max-w-2xl">
            Informasi, kegiatan, dan pengumuman terbaru seputar Forkom UMKM dan Kalurahan Margodadi.
          </p>
        </div>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {daftarBerita.map((berita) => (
            <Link href={`/berita/${berita.slug}`} key={berita.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-all">
              
              {/* Thumbnail Area */}
              <div className={`w-full aspect-video relative ${berita.gambar} flex items-center justify-center group-hover:opacity-90 transition-opacity`}>
                <span className="font-bold text-xs opacity-50 uppercase tracking-widest">Thumbnail Berita</span>
              </div>

              {/* Teks Berita */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded uppercase tracking-wider">
                    {berita.kategori}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {berita.tanggal}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
                  {berita.judul}
                </h3>
                
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {berita.kutipan}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <span className="text-amber-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Baca selengkapnya <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}