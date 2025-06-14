import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Common components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// User pages
import Front from './components/Front';
import About from './components/About';
import Shop from './components/Shop';
import News from './components/News';
import Contact from './components/Contact';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import CategoryPage from './components/CategoryPage';
import SignUp from './components/SignUp';
import TrackOrder from './pages/TrackOrder';
import Deals from './pages/Deals';
import News2 from './pages/News2';

// Admin components
import LoginPage from './components/admincomponents/LoginPage';
import AdminHome from './components/admincomponents/AdminHome';
import ProtectedRoute from './components/admincomponents/ProtectedRoute';
import ProductForm from './components/admincomponents/ProductForm';
import ProductList from './components/admincomponents/ProductList';
import UserList from './components/admincomponents/UserList';
import AdminLayout from './components/admincomponents/AdminLayout';

const UserLayout = ({ children }) => (
  <>
    <Navbar />
    <div style={{ minHeight: 'calc(100vh - 120px)', paddingBottom: '20px' }}>
      {children}
    </div>
    <Footer />
  </>
);

const App = () => {
  return (
    <CartProvider>
      <Routes>
        {/* Admin Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<ProtectedRoute><AdminLayout><AdminHome /></AdminLayout></ProtectedRoute>} />
        <Route path="/add-product" element={<ProtectedRoute><AdminLayout><ProductForm /></AdminLayout></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute><AdminLayout><ProductList /></AdminLayout></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><AdminLayout><UserList /></AdminLayout></ProtectedRoute>} />

        {/* User Routes */}
        <Route path="/" element={<UserLayout><Front /></UserLayout>} />
        <Route path="/about" element={<UserLayout><About /></UserLayout>} />
        <Route path="/shop" element={<UserLayout><Shop /></UserLayout>} />
        <Route path="/news" element={<UserLayout><News /></UserLayout>} />
        <Route path="/News" element={<UserLayout><News2 /></UserLayout>} />
        <Route path="/contact" element={<UserLayout><Contact /></UserLayout>} />
        <Route path="/user-login" element={<UserLayout><Login /></UserLayout>} />
        <Route path="/signup" element={<UserLayout><SignUp /></UserLayout>} />
        <Route path="/wishlist" element={<UserLayout><Wishlist /></UserLayout>} />
        <Route path="/cart" element={<UserLayout><Cart /></UserLayout>} />
        <Route path="/category/:category" element={<UserLayout><CategoryPage /></UserLayout>} />
        <Route path="/track" element={<UserLayout><TrackOrder /></UserLayout>} />
        <Route path="/deals" element={<UserLayout><Deals /></UserLayout>} />

        {/* Fallback */}
        <Route
          path="*"
          element={<UserLayout><h2 style={{ textAlign: 'center' }}>404 - Page Not Found</h2></UserLayout>}
        />
      </Routes>
    </CartProvider>
  );
};

export default App;
