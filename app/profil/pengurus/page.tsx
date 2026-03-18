export default function PengurusForkom() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Susunan Pengurus</h1>
          <p className="text-lg text-gray-500">Forum Komunikasi UMKM Kalurahan Margodadi Periode 2025 - 2028</p>
        </div>

        <div className="w-full aspect-[4/3] md:aspect-video bg-gray-100 rounded-3xl mb-12 overflow-hidden flex items-center justify-center border border-gray-200">
          <span className="text-gray-400 font-bold uppercase tracking-widest text-center px-4">Bagan Struktur Organisasi<br/>(Dapat diunggah admin)</span>
        </div>

        <article className="prose prose-lg prose-amber max-w-none text-gray-700">
          <h3>Dewan Pelindung & Penasihat</h3>
          <ul>
            <li><strong>Pelindung:</strong> Lurah Margodadi</li>
            <li><strong>Penasihat 1:</strong> Dukuh setempat</li>
            <li><strong>Penasihat 2:</strong> Tokoh Masyarakat</li>
          </ul>

          <h3>Pengurus Inti</h3>
          <div className="overflow-x-auto not-prose mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-amber-50 text-amber-900">
                  <th className="p-4 rounded-tl-xl font-bold">Jabatan</th>
                  <th className="p-4 font-bold">Nama Lengkap</th>
                  <th className="p-4 rounded-tr-xl font-bold">Kontak Aktif</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold">Ketua Forkom</td>
                  <td className="p-4">Bpk. Haryanto</td>
                  <td className="p-4">0812-XXXX-XXXX</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <td className="p-4 font-semibold">Sekretaris</td>
                  <td className="p-4">Ibu Siti Aminah</td>
                  <td className="p-4">0856-XXXX-XXXX</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold">Bendahara</td>
                  <td className="p-4">Bpk. Budi Santoso</td>
                  <td className="p-4">0821-XXXX-XXXX</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-8 text-sm text-gray-500 bg-gray-50 p-4 rounded-xl border border-gray-100">
            * Data di atas adalah contoh (dummy). Admin dapat merubah teks dan struktur ini kapan saja menggunakan editor Markdown di dashboard.
          </p>
        </article>

      </div>
    </div>
  );
}