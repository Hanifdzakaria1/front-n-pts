import React, { useState } from "react";
import './Main.css';
import img1 from "./Assets/gambaratas.jpg";
import imgg from './Assets/gambarbawah.jpg'
import img2 from './Assets/foto.png';
import img3 from './Assets/foto1.jpg';
import img4 from './Assets/foto2.jpg';
import img5 from './Assets/foto3.jpg';
import img6 from './Assets/foto4.jpg';
import img7 from './Assets/foto5.jpg';
import img8 from './Assets/foto6.jpg';

const Main = () => {
  return (
    <main className="main">
      <div>
        <div className="judul">
          <br /><br /><br /><br />
            <h1>MOCHI BY HANIF</h1>
            <img src={imgg} alt="" srcset="" />
            <h4> Lembut . Manis . Lucu</h4>
            {/* <a href="">selengkapnya;</a> */}
            <img className="imgjudul" src={img1} alt="gambarAtas"/>
        </div>
        <br />
        <br />
        <div className="juduldul">
            <h1>DAIFUKU MOCHI</h1>
            <h4>Penuh Keajaiban</h4>
            <a href="">selengkapnya;</a>
            <br />
            <img src={img2} alt="gambar"/>
        </div>
        <br /><br />
        <br /><br />
      <div className="container">
        <div className="gambar1">
          <div className="bar1">
            <h1>Yatsuhashi Mochi</h1>
            {/* <h4>SERIES 8</h4> */}
            <h5>LOMPATAN BESAR UNTUK LIDAH ANDA</h5>
            <a className="a" href="">selengkapnya;</a>
          </div>
            <img src={img3} alt="Gambar1"/>
        </div>
        <div className="gambar2">
        <div className="bar2">
            <h1>Kuzu Mochi</h1>
            {/* <h5>BERTENAGA BERKAT M2</h5> */}
            <a className="a" href="">selengkapnya;</a>
          </div>
            <img src={img4} alt="Gambar2"/>
        </div>
        <div className="gambar3">
        <div className="bar3">
            <h1>Warabi Mochi</h1>
            {/* <h5>Bertenaga super cepat berkat M2 Max dan M2 Ultra</h5> */}
            <a className="a" href="">selengkapnya;</a>
          </div>
            <img src={img5} alt="Gambar3"/>
        </div>
        <div className="gambar4">
        <div className="bar4">
            <h1>Sakura Mochi</h1>
            {/* <h5>Ditransformasi oleh Apple silicone</h5> */}
            <a className="a" href="">selengkapnya;</a>
          </div>
            <img src={img6} alt="Gambar4"/>
        </div>
        <div className="gambar5">
        <div className="bar5">
            <h1>Kinako Mochi</h1>
            {/* <h5>New camera. New design. Newphoria</h5> */}
            <a className="a" href="">selengkapnya;</a>
          </div>
            <img src={img7} alt="Gambar5"/>
        </div>
        <div className="gambar6">
        <div className="bar6">
            <h1>Chichi Dango</h1>
            {/* <h5>Adaptive Audio. Now playing</h5> */}
            <a className="a" href="">selengkapnya;</a>
          </div>
            <img src={img8} alt="Gambar6"/>
        </div>
      </div>

    </div>
  </main>
  )
}

export default Main;