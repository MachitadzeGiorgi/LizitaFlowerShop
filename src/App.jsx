import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} /> {/* About Us */}
        <Route path="/contact" element={<Contacts />} /> {/* Contact */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
