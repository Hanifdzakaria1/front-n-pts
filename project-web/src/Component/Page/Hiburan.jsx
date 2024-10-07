import React from 'react'
import './Hiburan.css';
import hbr1 from './AssetsPage/hibur1.png';
import hbr2 from './AssetsPage/hibur2.png';
import hbr3 from './AssetsPage/hibur3.png';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Hiburan = () => {
  return (
    <div>
      <Navbar/>
      <br /><br /><br />
        <div>
               <h1>Bahan Baku</h1> 
               <button>tambah</button>
        </div>
        <hr />
        <div>
                <h1>Nama Bahan</h1>
                <button>tambah</button>
        </div>
        <hr />
        <div>
                <h1>Jumlah (kg)</h1>
                <button>tambah</button>
        </div>
        <hr />
        <hr />
        <br /><br />
      <Footer/>
    </div>
    
  )
}

export default Hiburan
