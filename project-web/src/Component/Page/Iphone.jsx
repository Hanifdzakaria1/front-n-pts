import React from 'react';
import './Iphone.css';
// import ap5 from './AssetsPage/app5.jpg';
import ap10 from './AssetsPage/app10.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';


const Iphone = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <div>
                
        <br /><br /><br />
        <div>
               <h1>Payment</h1> 
               <button>tambah</button>
        </div>
        <hr />
        <div>
                <h1>Nama Pelanggan</h1>
                <button>tambah</button>
        </div>
        <hr />
        <div>
                <h1>Order</h1>
                <button>tambah</button>
        </div>
        <hr />
        <div>
                <h1>Jumlah Harga</h1>
                <button>tambah</button>
        </div>
        <hr />
        <br /><br />

        </div> 
      </div>
      <Footer/>
    </div>
  )
}

export default Iphone