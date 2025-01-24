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
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/AboutUs" element={<AboutUs />} /> {/* About Us */}
        <Route path="/Contact" element={<Contacts />} /> {/* Contact */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
