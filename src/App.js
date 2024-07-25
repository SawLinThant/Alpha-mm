import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/ContactUs';
import Header from './components/header';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='aboutus' element={<AboutUs/>}/>
        <Route path='contactus' element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
