import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import { Home } from "./pages/Home";
import AddtoCart from "./pages/AddtoCart";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/addtocart" element={<AddtoCart />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
