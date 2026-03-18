export default function ProfilPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
      <h1 className="text-3xl font-bold border-b pb-4 mb-6">Profil Kalurahan Margodadi</h1>
      <div className="space-y-4 text-gray-700">
        <p>
          Margodadi adalah sebuah kalurahan yang terletak di wilayah yang strategis dengan berbagai potensi alam dan ekonomi kreatif.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Visi & Misi Forkom UMKM</h2>
        <p>
          Mewujudkan UMKM Margodadi yang mandiri, inovatif, dan berdaya saing tinggi melalui kolaborasi dan pemanfaatan teknologi informasi.
        </p>
        {/* Nanti bisa ditambah komponen Peta Tematik di sini */}
      </div>
    </div>
  )
}