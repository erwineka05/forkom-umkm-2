import './globals.css'
import Navbar from './Navbar'

export const metadata = {
  title: 'Forkom UMKM Margodadi',
  description: 'Portal Resmi Forkom UMKM Kalurahan Margodadi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col font-sans">
        
        {/* Panggil komponen Navbar di sini */}
        <Navbar />

        {/* 🌟 KONTEN UTAMA */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* 🌟 FOOTER (Tidak berubah dari sebelumnya) */}
        <footer className="bg-[#1a1f2e] text-gray-300 pt-16 pb-6 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              
              {/* Info Kiri */}
              <div>
                <h2 className="text-white text-2xl font-bold mb-4">
                  Forkom UMKM <span className="text-amber-500">Margodadi</span>
                </h2>
                <p className="text-gray-400 text-sm mb-8 max-w-md">
                  Wadah kolaborasi pelaku usaha mikro, kecil, dan menengah di Margodadi. Temukan aneka produk lokal berkualitas langsung dari sumbernya.
                </p>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-amber-500 shrink-0">📍</div>
                    <div>
                      <p className="font-semibold text-white">Alamat</p>
                      <p className="text-gray-400">Kalurahan Margodadi, Seyegan, Sleman, DI Yogyakarta</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-amber-500 shrink-0">📱</div>
                    <div>
                      <p className="font-semibold text-white">WhatsApp</p>
                      <p className="text-gray-400">+62 812-3456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-amber-500 shrink-0">✉️</div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-400">umkm@margodadi.desa.id</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Area Maps Kanan */}
              <div className="bg-gray-800 rounded-xl overflow-hidden h-64 relative border border-gray-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.16147492161!2d110.30141675!3d-7.732386349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58a7da0a5d4d%3A0xb14d03e5a7b8e1f5!2sMargodadi%2C%20Seyegan%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                ></iframe>
              </div>

            </div>
            
            <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
              <p>© {new Date().getFullYear()} FORKOM UMKM Kalurahan Margodadi. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}