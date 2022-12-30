import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import './App.css';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ProductosPage from './pages/ProductosPage';
import ProductosPage2 from './pages/ProductosPage2';
import ProductosPage3 from './pages/ProductosPage3';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <div className="App">

      <Header/>

      <BrowserRouter>      
      <Nav/> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="nosotros" element={<NosotrosPage />} />
        <Route path="productos" element={<ProductosPage />} />
        <Route path="gorras" element={<ProductosPage2 />} />
        <Route path="abrigos" element={<ProductosPage3 />} />
        <Route path="contacto" element={<ContactoPage />} />
      </Routes>      
      </BrowserRouter>


      <Footer/>
      
      <br/>

    </div>
  );
}

export default App;
