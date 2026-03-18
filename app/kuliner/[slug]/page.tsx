import Link from 'next/link';

export default async function DetailKuliner({ params }: { params: Promise<{ slug: string }> }) {
  // 1. Tunggu (await) params sebelum membacanya
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // 2. Format nama slug agar terlihat rapi (contoh: telur-asin-tiara -> Telur Asin Tiara)
  const formatJudul = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="bg-white min-h-screen py-8 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tombol Kembali */}
        <Link href="/kuliner" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-amber-600 mb-8 transition-colors">
          <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Katalog
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          
          {/* Kolom Kiri: Gambar Produk */}
          <div className="w-full aspect-square bg-gray-100 rounded-3xl flex items-center justify-center border border-gray-200 shadow-sm overflow-hidden">
             {/* Nanti diisi tag <Image> beneran */}
             <span className="text-gray-400 font-bold tracking-widest uppercase">Area Foto Produk</span>
          </div>

          {/* Kolom Kanan: Detail & Aksi */}
          <div className="flex flex-col justify-center">
            
            <div className="mb-6 border-b border-gray-100 pb-6">
              <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
                Produk UMKM
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                {formatJudul}
              </h1>
              <p className="text-2xl font-bold text-[#00aa5b]">
                Rp --.--- {/* Harga statis sementara */}
              </p>
            </div>

            <div className="prose prose-sm sm:prose-base text-gray-600 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Deskripsi Produk</h3>
              <p>
                Ini adalah deskripsi detail mengenai produk <strong>{formatJudul}</strong>. Halaman ini nantinya akan menampilkan teks lengkap, komposisi, bahan, atau cerita di balik produk yang diisi langsung oleh admin melalui dashboard CMS.
              </p>
              <p>
                Margodadi terus berkomitmen menghadirkan kualitas terbaik langsung dari tangan pengrajin dan peracik lokal.
              </p>
            </div>

            {/* Informasi Penjual & Tombol Beli */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-amber-500">🏬</span> Informasi Penjual
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                <li className="flex gap-2">
                  <span className="font-semibold min-w-[80px]">Lokasi:</span>
                  <span>Margodadi, Seyegan</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold min-w-[80px]">Status:</span>
                  <span className="text-green-600 font-medium">Tersedia / Pre-Order</span>
                </li>
              </ul>
              
              <a 
                href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20pesan%20produk%20${formatJudul}%20dari%20website%20UMKM%20Margodadi.`}
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-[#00aa5b] hover:bg-[#008f4c] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Pesan via WhatsApp
              </a>
              <p className="text-center text-xs text-gray-400 mt-3">Transaksi langsung dengan penjual tanpa potongan biaya.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}