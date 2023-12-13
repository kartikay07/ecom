import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/Homepage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ProductPage from "./Pages/ProductPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import { Provider } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={ <ProductPage /> } />
        <Route path="/products/detail/:id" element={ <ProductDetailPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/contact" element={ <ContactPage /> } />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={ <LoginPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;