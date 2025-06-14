// components/admincomponents/AdminLayout.jsx
import React from 'react';
import AdminNavbar from './AdminNavbar';

const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      <div style={{ marginTop: '80px', padding: '1rem' }}>
        {children}
      </div>
    </>
  );
};

export default AdminLayout;
