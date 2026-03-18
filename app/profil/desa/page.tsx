export default function ProfilDesa() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">Tentang Kami</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">Profil Kalurahan Margodadi</h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="w-full aspect-[21/9] bg-gray-100 rounded-3xl mb-12 overflow-hidden flex items-center justify-center border border-gray-200">
          <span className="text-gray-400 font-bold uppercase tracking-widest">Foto Balai Kalurahan / Peta Wilayah</span>
        </div>

        <article className="prose prose-lg prose-amber max-w-none text-gray-700">
          <p className="lead text-xl text-gray-600 font-medium">
            Margodadi adalah sebuah kalurahan yang terletak di Kapanewon Seyegan, Kabupaten Sleman, Daerah Istimewa Yogyakarta. Kami memiliki potensi besar di bidang pertanian, kerajinan, dan pariwisata alam.
          </p>
          
          <h3>Visi</h3>
          <p className="italic text-gray-800 border-l-4 border-amber-500 pl-4 bg-amber-50 py-3 pr-3 rounded-r-lg">
            "Mewujudkan masyarakat Kalurahan Margodadi yang sejahtera, mandiri, berbudaya, dan berdaya saing tinggi melalui pemberdayaan ekonomi kreatif dan UMKM."
          </p>

          <h3>Misi</h3>
          <ol>
            <li>Meningkatkan kualitas sumber daya manusia pelaku UMKM melalui pelatihan dan pendampingan berkelanjutan.</li>
            <li>Memfasilitasi akses permodalan, perizinan, dan legalitas usaha bagi warga.</li>
            <li>Memperluas jangkauan pemasaran produk lokal melalui digitalisasi dan pameran.</li>
            <li>Mengembangkan potensi desa wisata terintegrasi yang ramah lingkungan.</li>
          </ol>
        </article>
      </div>
    </div>
  );
}