
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<ProductList />} />
      <Route path="shop/:productId" element={<Product />} />
    </Routes>
  );
}


export default App;
