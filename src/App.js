import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import ProductLists from "./components/ProductLists";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./components/Admin";

function App() {
  const user = true;
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductLists />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          {/* Route Parameter :id for this use useParams */}
          <Route
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
