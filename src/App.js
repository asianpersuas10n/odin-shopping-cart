import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import ShopPage from "./routes/ShopPage";
import ShoppingCartPage from "./routes/ShoppingCartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-item" element={<ShopPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
