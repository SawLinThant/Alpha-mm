import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/ContactUs';
import Product from './pages/product';
import Dashboard from './pages/Dashboard';
import Login from './pages/Dashboard/login';

function App() {
  return (
    <>
      <Routes>
      <Route path='login' element={<Login/>}/>
        <Route path='*' element={<Home/>}/>
        <Route path='aboutus' element={<AboutUs/>}/>
        <Route path='contactus' element={<ContactUs/>}/>
        <Route path='products' element={<Product/>}/>
        <Route path='dashboard/*' element={<Dashboard/>}/>
      </Routes>
    </>
    
  );
}

export default App;
