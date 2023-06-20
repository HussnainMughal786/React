import Navbar from "./Components/Navbar";
// import Slider from "./Components/Slider";
// import Counter from "./Components/Counter";
// import Carousol from "./Components/Carousol";
import Products from "./Components/Products";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "./Components/Footer";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>  
      <Route path="/About" element={<About/>}></Route>
    </Routes>
    <Footer/>
    
    

    </>
  );
}

export default App;
