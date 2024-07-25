import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/ContactUs';
import Header from './components/header';
import Footer from './components/footer';
import Product from './pages/product';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='aboutus' element={<AboutUs/>}/>
        <Route path='contactus' element={<ContactUs/>}/>
        <Route path='products' element={<Product/>}/>
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
