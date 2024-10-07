import React from 'react'
import './Dukungan.css';
import dk1 from './AssetsPage/dukung1.png';
import dk2 from './AssetsPage/dukung2.png';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Dukungan = () => {
  return (
    <div>
    <Navbar/>
    <div className='hb'><img src={dk1} alt="" srcset="" /></div>
    <div className='hb'>
      {/* <a href="">0857 8091 6247</a> */}
    </div>
    <div className='p'>
      <h1>Berhati-hati dengan mochi tiruan</h1>
      <p>Merek Dagang (Trademark)
Daftarkan merek dagang untuk nama bisnis, logo, atau slogan unik yang kamu gunakan. Ini akan melindungi identitas brand secara hukum dan mencegah pihak lain menggunakannya secara ilegal.

Desain Kemasan Unik
Buat desain kemasan yang menarik dan sulit ditiru, dengan elemen visual khas yang langsung dikenali oleh konsumen. Kamu bisa menambahkan fitur-fitur seperti segel holografik atau QR code untuk keaslian produk.

Rahasia Resep
Jaga rahasia resep dan teknik produksi secara ketat, terutama elemen unik yang menjadi pembeda produk mochi-mu. Pastikan hanya karyawan yang sangat tepercaya yang memiliki akses terhadap resep tersebut, dan pertimbangkan untuk membuat kontrak kerahasiaan (NDA) bagi mereka.

Pelayanan dan Pengalaman Pelanggan yang Unik
Fokus pada memberikan pengalaman pelanggan yang luar biasa melalui pelayanan, kisah di balik produk, atau interaksi yang kamu bangun. Meskipun produk fisik bisa ditiru, pelayanan yang baik dan pengalaman pelanggan yang positif sulit direplikasi.

Sertifikasi dan Legalitas
Pastikan produk mochi-mu memiliki sertifikasi yang sesuai, seperti sertifikat halal, standar kebersihan, atau sertifikasi kualitas lainnya. Produk yang memiliki keabsahan lebih di mata konsumen.</p>
    </div>
    <Footer/>
  </div>
  )
}

export default Dukungan;