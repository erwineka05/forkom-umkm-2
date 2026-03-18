import Link from 'next/link';

export default async function DetailBerita({ params }: { params: Promise<{ slug: string }> }) {
  // Await params agar terhindar dari error
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Format nama slug sementara menjadi judul
  const formatJudul = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tombol Kembali */}
        <Link href="/berita" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-amber-600 mb-8 transition-colors">
          <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Indeks Berita
        </Link>

        {/* Header Artikel */}
        <header className="mb-10 text-center md:text-left">
          <span className="inline-block text-sm font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Berita & Pengumuman
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {formatJudul}
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500 font-medium border-y border-gray-100 py-3">
            <div className="flex items-center gap-1">
              <span>📅</span> 18 Maret 2026
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-1">
              <span>✍️</span> Admin Forkom UMKM
            </div>
          </div>
        </header>

        {/* Gambar Utama Artikel */}
        <div className="w-full aspect-video bg-gray-100 rounded-2xl mb-10 flex items-center justify-center border border-gray-200 shadow-sm overflow-hidden">
           <span className="text-gray-400 font-bold tracking-widest uppercase text-lg">Gambar Utama Artikel</span>
        </div>

        {/* Isi Artikel (menggunakan Tailwind Typography 'prose') */}
        <article className="prose prose-lg prose-amber max-w-none text-gray-700">
          <p className="lead text-xl text-gray-600 font-medium mb-6">
            Kalurahan Margodadi terus berupaya meningkatkan kapasitas dan kualitas pelaku Usaha Mikro Kecil dan Menengah (UMKM) melalui berbagai program strategis.
          </p>
          <p>
            Ini adalah paragraf contoh untuk isi berita mengenai <strong>{formatJudul}</strong>. Halaman ini nantinya akan membaca teks Markdown yang ditulis secara dinamis oleh admin melalui CMS.
          </p>
          <p>
            Dengan adanya dukungan dari berbagai pihak, diharapkan omzet para pelaku usaha dapat terus meningkat dan kesejahteraan warga Margodadi semakin terjamin. Pemanfaatan teknologi digital menjadi salah satu fokus utama dalam pengembangan bisnis saat ini.
          </p>
          <h3>Poin-poin Penting:</h3>
          <ul>
            <li>Peningkatan kualitas produk lokal.</li>
            <li>Pemanfaatan media sosial untuk promosi.</li>
            <li>Kemudahan akses permodalan dan legalitas (seperti sertifikat Halal).</li>
          </ul>
          <p>
            Demikian informasi terbaru dari Forkom UMKM Margodadi. Terus pantau website ini untuk mendapatkan <em>update</em> kegiatan dan program-program menarik lainnya.
          </p>
        </article>

        {/* Bagian Share (Opsional) */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
          <span className="text-gray-500 font-medium text-sm">Bagikan artikel ini:</span>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold hover:bg-blue-200 transition">FB</button>
            <button className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold hover:bg-green-200 transition">WA</button>
          </div>
        </div>

      </div>
    </div>
  );
}