import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import ProductLists from "./components/ProductLists";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import Notfound from "./components/Notfound";
import ContactIn from "./components/ConatctIn";
import ContactUs from "./components/ContactUs";

function App() {
  const user = true;
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="in" element={<ContactIn />} />
            {/* Contact/in  Nested Route for we need to import Outlet in Contact*/}
            <Route path="us" element={<ContactUs />} />
          </Route>
          <Route path="/products" element={<ProductLists />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          {/* Route Parameter :id for this use useParams */}
          <Route
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
          <Route path="*" element={<Notfound title="404" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
