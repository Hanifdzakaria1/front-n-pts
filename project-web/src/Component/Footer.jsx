import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="foot">
          <br />
          <hr />
        <div>
        <li>
          <p>© 2024 Mochi Terbaik di Bumi</p>
          <p>Semua hak cipta dilindungi. Kami berkomitmen untuk menghadirkan mochi berkualitas terbaik dengan rasa yang otentik dan inovatif.</p>
          <p>Jelajahi berbagai varian mochi kami yang dibuat dengan bahan-bahan alami pilihan dan resep tradisional yang diwariskan dari generasi ke generasi</p>
          <p>Untuk informasi lebih lanjut mengenai kebijakan privasi, syarat dan ketentuan layanan, atau jika Anda memiliki pertanyaan dan saran, silakan hubungi kami melalui email atau media sosial</p>
          <p>Terima kasih atas kepercayaan Anda dalam memilih Mochi Terbaik di Bumi sebagai mitra kuliner Anda.</p>
          <p>Jangan lupa untuk mengikuti kami di media sosial untuk mendapatkan update terbaru mengenai promo, event, dan produk terbaru</p>

        </li>
      </div>
      <br />
      <hr />
      <br /><br /><br />
            <ul>
                <li className="lo">
                    <p>Design_by:</p>
                    <p>Hanif_Dzakaria</p>
                    <p>CopyRight_2024</p>
                </li>
            </ul>
            <ul>
                <li className="li">
                    <p>Design_by:</p>
                    <p>Hanif_Dzakaria</p>
                    <p>CopyRight_2024</p>
                </li>
            </ul>
            <ul>
                <li className="lu">
                    <p>Design_by:</p>
                    <p>Hanif_Dzakaria</p>
                    <p>CopyRight_2024</p>
                </li>
            </ul>
            
      </div>
    </footer>
  )
}

export default Footer;