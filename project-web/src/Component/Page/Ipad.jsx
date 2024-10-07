import React from 'react';
import './Ipad.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Ipad = () => {
  return (
    <div>
      <Navbar/>
      <br /><br /><br />
        <div>
               <h1>Order</h1> 
               <button>tambah</button>
        </div>
        <hr />
        <div>
                <h1>Nama Pelanggan</h1>
                <button>tambah</button>
        </div>
        <hr />
        <div>
                <h1>Pesanan</h1>
                <button>tambah</button>
        </div>
        <hr />
        <div>
                <h1>Jumlah Order</h1>
                <button>tambah</button>
        </div>
        <hr />
        <br /><br />
      <Footer/>
    </div>
  )
}

export default Ipad;