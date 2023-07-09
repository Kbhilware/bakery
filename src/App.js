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
        <Routes>
         <Route path='/' element={<Navbar siteName="Your Bakery" componentProduct={Product}/> } />
         <Route path='/about' element={<Navbar siteName="Your Bakery" componentAbout={About} /> } />
         
        </Routes>
        </BrowserRouter>
    </AddToCartState>
  );
}

export default App;
