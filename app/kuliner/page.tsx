import Link from 'next/link';

// Data Dummy Sementara
const semuaProduk = [
  { id: 1, slug: 'telur-asin-tiara', kategori: 'KULINER', nama: 'Telur Asin Tiara Pilihan', harga: 'Rp 5.000', gambar: 'bg-orange-100 text-orange-400' },
  { id: 2, slug: 'brownies-lumer', kategori: 'KULINER', nama: 'Brownies Lumer Margodadi (Box)', harga: 'Rp 35.000', gambar: 'bg-amber-100 text-amber-500' },
  { id: 3, slug: 'tas-anyaman-bambu', kategori: 'KERAJINAN', nama: 'Tas Anyaman Bambu Eksklusif', harga: 'Rp 75.000', gambar: 'bg-green-100 text-green-500' },
  { id: 4, slug: 'sambal-bawang-qu', kategori: 'KULINER', nama: 'Sambal Bawang Qu Botol Kaca', harga: 'Rp 15.000', gambar: 'bg-red-100 text-red-500' },
  { id: 5, slug: 'kopi-lereng-merapi', kategori: 'PRODUK', nama: 'Kopi Bubuk Asli Lereng Merapi', harga: 'Rp 25.000', gambar: 'bg-stone-200 text-stone-500' },
  { id: 6, slug: 'batik-tulis-margodadi', kategori: 'KERAJINAN', nama: 'Batik Tulis Motif Margodadi', harga: 'Rp 150.000', gambar: 'bg-blue-100 text-blue-500' },
  { id: 7, slug: 'keripik-pisang-manis', kategori: 'KULINER', nama: 'Keripik Pisang Kepok Manis', harga: 'Rp 12.000', gambar: 'bg-yellow-100 text-yellow-500' },
  { id: 8, slug: 'madu-asli-hutan', kategori: 'PRODUK', nama: 'Madu Hutan Asli Botol 250ml', harga: 'Rp 65.000', gambar: 'bg-orange-50 text-orange-600' },
];

export default function KatalogKuliner() {
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

        {/* Grid Produk (Desain Gojek) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {semuaProduk.map((produk) => (
            <Link href={`/kuliner/${produk.slug}`} key={produk.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-all">
              
              {/* Area Gambar */}
              <div className={`w-full aspect-square relative ${produk.gambar} flex items-center justify-center group-hover:opacity-90 transition-opacity`}>
                <span className="font-bold text-xs opacity-50">FOTO</span>
              </div>

              {/* Area Teks & Harga */}
              <div className="p-3 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-amber-600 tracking-wider uppercase mb-1">
                  {produk.kategori}
                </span>
                
                <h3 className="font-semibold text-gray-900 text-[13px] leading-snug mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
                  {produk.nama}
                </h3>
                
                {/* Harga dan Tombol Beli */}
                <div className="mt-auto flex items-center justify-between pt-1">
                  <span className="font-bold text-gray-900 text-sm">{produk.harga}</span>
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