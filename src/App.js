import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import ProductLists from "./components/ProductLists";

function App() {
  return (
    <div className="App">
      <header>Header</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductLists />} />
        <Route path="/products/1001" element={<ProductDetails />} />
      </Routes>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
