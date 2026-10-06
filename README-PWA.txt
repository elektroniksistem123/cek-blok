PWA PEMERIKSAAN KONDISI BLOK

Isi paket:
- index.html
- manifest.json
- service-worker.js
- icon-192.png
- icon-512.png

Cara pasang:
1. Unggah SEMUA file ke folder yang sama pada hosting HTTPS.
2. Buka alamat index.html melalui Chrome Android.
3. Tekan tombol Pasang Aplikasi atau menu Chrome > Install app / Tambahkan ke layar utama.
4. Buka aplikasi satu kali saat online agar berkas tersimpan untuk penggunaan offline.

Catatan:
- GPS browser memerlukan HTTPS dan izin lokasi.
- Ekspor Excel memakai ExcelJS dari CDN. Buka aplikasi sekali saat online agar resource dapat masuk cache.
- Saat memperbarui aplikasi, ubah CACHE_NAME di service-worker.js, misalnya cek-blok-v2.
