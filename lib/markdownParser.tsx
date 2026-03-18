import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Menentukan letak folder utama tempat CMS menyimpan data
const rootContentDirectory = path.join(process.cwd(), 'content');

/**
 * Fungsi untuk mengambil SEMUA data dari sebuah folder (contoh: folder 'kuliner')
 * Cocok digunakan untuk Halaman Daftar / Katalog
 */
export function getAllItems(folder: string) {
  const folderPath = path.join(rootContentDirectory, folder);
  
  // Jika folder belum ada (misal CMS belum pernah dipakai), kembalikan array kosong
  if (!fs.existsSync(folderPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(folderPath);
  
  const allItemsData = fileNames
    // Hanya baca file yang berakhiran .md
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Hapus ekstensi .md untuk dijadikan slug URL (contoh: sate-kremes.md -> sate-kremes)
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(folderPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Parsing metadata menggunakan gray-matter
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as any), // Menggabungkan data seperti title, price, image
      };
    });

  // Urutkan data berdasarkan tanggal terbaru (Sangat berguna untuk fitur Berita)
  return allItemsData.sort((a, b) => {
    if (a.date && b.date) {
      return a.date < b.date ? 1 : -1;
    }
    return 0; // Jika tidak ada tanggal (seperti kuliner), biarkan urutannya
  });
}

/**
 * Fungsi untuk mengambil SATU data spesifik beserta konten HTML-nya
 * Cocok digunakan untuk Halaman Detail (contoh: /kuliner/sate-kremes)
 */
export async function getItemBySlug(folder: string, slug: string) {
  const fullPath = path.join(rootContentDirectory, folder, `${slug}.md`);
  
  // Jika URL ngawur dan file tidak ditemukan
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // Ubah isi konten (body) dari Markdown menjadi string HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml, // Ini adalah teks deskripsi panjangnya
    ...(matterResult.data as any), // Ini adalah metadata (title, price, image, dll)
  };
}