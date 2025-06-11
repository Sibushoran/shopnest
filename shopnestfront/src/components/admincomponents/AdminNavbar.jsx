// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";


const BACKEND_URL = "https://u-design-one.vercel.app"; 

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminName, setAdminName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/check-auth`, {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        setIsAuthenticated(data.authenticated);
        if (data.authenticated && data.user) {
          setAdminName(data.user.name);
        }
      })
      .catch(err => console.error("Auth check failed:", err));
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${BACKEND_URL}/api/logout`, {
        method: "POST",
        credentials: "include",
      });
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Admin Dashboard</Link>
      </div>

      <div className="navbar-links">
        <Link to="/add-product" className={`nav-link ${pathname === "/add-product" ? "active" : ""}`}>
          Add Product
        </Link>
        <Link to="/add-product" className={`nav-link ${pathname === "/add-product" ? "active" : ""}`}>
          Add Product
        </Link>
        <Link to="/products" className={`nav-link ${pathname === "/products" ? "active" : ""}`}>
          Product List
        </Link>
        <Link to="/users" className={`nav-link ${pathname === "/users" ? "active" : ""}`}>
          User List
        </Link>
        <Link to="/" className={`nav-link ${pathname === "/users" ? "active" : ""}`}>
          Go to Home
        </Link>


        <div
          className="admin-dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          style={{ position: 'relative', marginLeft: '1rem', cursor: 'pointer' }}
        >
          <span className="nav-link" style={{ fontWeight: 'bold' }}>
            👤 {adminName || 'Admin'}
          </span>
          {dropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                borderRadius: '5px',
                padding: '0.5rem',
                zIndex: 100,
              }}
            >
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: '#f44336',
                  color: '#fff',
                  border: 'none',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
