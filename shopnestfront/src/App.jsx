import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// User components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Front from './components/Front';
import About from './components/About';
import Shop from './components/Shop';
import News from './components/News';
import Contact from './components/Contact';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import CategoryPage from "./components/CategoryPage";
import SignUp from './components/SignUp';
import TrackOrder from "./pages/TrackOrder";
import Deals from "./pages/Deals";
import News2 from "./pages/News2";

// Admin components
import LoginPage from './components/admincomponents/LoginPage';
import AdminHome from './components/admincomponents/AdminHome';
import AdminNavbar from './components/admincomponents/AdminNavbar';
import ProtectedRoute from './components/admincomponents/ProtectedRoute';
import ProductForm from './components/admincomponents/ProductForm';
import ProductList from './components/admincomponents/ProductList';
import UserList from './components/admincomponents/UserList';

const App = () => {
  return (
    <CartProvider>
      <Routes>
        {/* Admin Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminNavbar><AdminHome /></AdminNavbar>} />
        <Route path="/add-product" element={<ProtectedRoute><ProductForm /></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><UserList /></ProtectedRoute>} />

        {/* User-Facing Routes */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <div style={{ minHeight: 'calc(100vh - 120px)', paddingBottom: '20px' }}>
                <Routes>
                  <Route path="/" element={<Front />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/user-login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/category/:category" element={<CategoryPage />} />
                  <Route path="/track" element={<TrackOrder />} />
                  <Route path="/deals" element={<Deals />} />
                  <Route path="/News" element={<News2 />} />
                </Routes>
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </CartProvider>
  );
};

export default App;
