import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="nama">
        <ul>  
          <li className='logo'><img src="https://raw.githubusercontent.com/oCode-21/apple-clone/9fd4b3be94bfe432b9ae0355f31318df5ba0bfd9/svg/apple.svg" alt="Apple Logo" /></li>
          <li><Link to='/mac'>Mochi</Link></li>
          <li><Link to='/ipad'>Order</Link></li>
          <li><Link to='/iphone'>Payment</Link></li>
          <li><Link to='/hiburan'>Bahan Baku</Link></li>
          <li><Link to='/dukungan'>Kritik & saran</Link></li>
          <li><Link to='/tempatmembeli'>Tempat Membeli</Link></li>
          <li className='cari'><button onClick={'#'}></button></li>
        </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;