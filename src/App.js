import './App.css';
import Product from './component/Product';
import AddToCartState from './context/AddToCartState';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './component/About';
// About

function App() {
  return (
    <AddToCartState>
      <BrowserRouter>
        <Navbar siteName="Your Bakery"/> 
        <Routes>
         <Route path="/" element={<Product />} />
         <Route path="/about" element={<About />} />
         {/* <Route path='/about' element={<Navbar siteName="Your Bakery" componentAbout={About} /> } /> */}
         
        </Routes>
        </BrowserRouter>
    </AddToCartState>
  );
}

export default App;
