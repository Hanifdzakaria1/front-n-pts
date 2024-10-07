import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import tp from './AssetsPage/tmp.png'
import './TempatMembeli.css'

const TempatMembeli = () => {
  return (
    <div>
      <Navbar/>
      <div className='ou'>
        <img src={tp} alt="" srcset="" />
      </div>
      <Footer/>
    </div>
  )
}

export default TempatMembeli