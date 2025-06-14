import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const BACKEND_URL = import.meta.env.REACT_APP_BACKEND_URL|| "http://localhost:5000"; // for Vite
// If you're using Create React App (CRA), use:
 

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/check-auth`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthenticated(data.authenticated);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Auth check failed:", err);
        setAuthenticated(false);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
