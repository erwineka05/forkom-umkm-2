import Link from 'next/link';
// Mengimpor fungsi penarik data yang sudah kita buat
import { getAllItems } from '../../lib/markdownParser';

export default async function KatalogKuliner() {
  // Menarik semua data asli dari folder content/kuliner
  // Data ini otomatis terisi kalau admin nambah produk di CMS
  const semuaProduk = getAllItems('kuliner');

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Halaman */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Katalog Produk & Kuliner</h1>
          <p className="text-gray-500 max-w-2xl">
            Temukan dan dukung produk lokal berkualitas dari para pelaku UMKM di Kalurahan Margodadi. Belanja langsung dari warga, majukan ekonomi desa.
          </p>
        </div>

        {/* Jika Belum Ada Produk di CMS */}
        {semuaProduk.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <span className="text-4xl mb-4 block">🛒</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Belum ada produk</h3>
            <p className="text-gray-500">Admin belum mengunggah produk kuliner apa pun. Silakan tambahkan lewat dashboard CMS.</p>
          </div>
        )}

        {/* Grid Produk (Desain Gojek) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {semuaProduk.map((produk: any) => (
            <Link href={`/kuliner/${produk.slug}`} key={produk.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-all">
              
              {/* Area Gambar (Sekarang menggunakan gambar asli dari CMS) */}
              <div className="w-full aspect-square relative bg-gray-100 flex items-center justify-center group-hover:opacity-90 transition-opacity overflow-hidden">
                {produk.image ? (
                  <img src={produk.image} alt={produk.title} className="object-cover w-full h-full" />
                ) : (
                  <span className="font-bold text-xs text-gray-400 opacity-50">NO FOTO</span>
                )}
              </div>

              {/* Area Teks & Harga */}
              <div className="p-3 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-amber-600 tracking-wider uppercase mb-1">
                  {produk.kategori || 'KULINER'}
                </span>
                
                {/* Perhatikan: properti dari CMS menggunakan bahasa Inggris (title, price) sesuai config.yml */}
                <h3 className="font-semibold text-gray-900 text-[13px] leading-snug mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
                  {produk.title}
                </h3>
                
                {/* Harga dan Tombol Beli */}
                <div className="mt-auto flex items-center justify-between pt-1">
                  <span className="font-bold text-gray-900 text-sm">{produk.price}</span>
                  <button className="bg-[#00aa5b] text-white w-7 h-7 flex items-center justify-center rounded-full font-bold shadow-sm group-hover:bg-[#008f4c] transition-colors">
                    +
                  </button>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}