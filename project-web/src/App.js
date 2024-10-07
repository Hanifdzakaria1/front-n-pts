import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
// import Navbar from './Component/Navbar';
// import Main from './Component/Main';
// import Footer from './Component/Footer';
import Mac from './Component/Page/Mac';
import Ipad from './Component/Page/Ipad';
// import Watch from './Component/Page/Watch';
import Iphone from './Component/Page/Iphone';
import Hiburan from './Component/Page/Hiburan';
import Dukungan from './Component/Page/Dukungan';
import TempatMembeli from './Component/Page/TempatMembeli';
import { Home } from './Component/Page/Home';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/">
    <Route index element={<Home/>}/>
    <Route path='mac' element={<Mac/>}/>
    <Route path='ipad' element={<Ipad/>}/>
    <Route path='iphone' element={<Iphone/>}/> 
    <Route path='hiburan' element={<Hiburan/>}/>
    <Route path='dukungan' element={<Dukungan/>}/>
    <Route path='tempatmembeli' element={<TempatMembeli/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

{/* <Navbar />
<Main/>
<Footer/> */}

export default App;
