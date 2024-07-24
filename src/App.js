import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';

function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='aboutus' element={<AboutUs/>}/>
      </Routes>
    </>
  );
}

export default App;
