
import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import mc1 from './AssetsPage/mac1.jpg';
import mc2 from './AssetsPage/mac2.jpg';
import mc3 from './AssetsPage/mac3.jpg';
import './Mac.css';


const Mac = () => {
  return (
    <div>   
        <div>
        <Navbar className='m' />
        <div><br /><br /><br />
        <div>
               <h1>Mochi</h1> 
               <button>tambah</button>
        </div>
        <hr />
        <div>
                <h1>Stok</h1>
                <button>tambah</button>
        </div>
        <hr />
        <div>
                <h1>Jumlah</h1>
                <button>tambah</button>
        </div>
        <hr />
        <br /><br />
        </div>
        <Footer/>
        </div>
    </div>
  )
}

export default Mac;