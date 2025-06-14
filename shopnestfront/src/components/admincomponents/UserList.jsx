import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";

// Load backend URL from .env

// If using Create React App, use:
const BACKEND_URL = import.meta.env.REACT_APP_BACKEND_URL|| "http://localhost:5000"; // for Vite

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/users`, {
          withCredentials: true,
        });
        setUsers(res.data || []);
        setError("");
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("❌ Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h2>User List</h2>

      {loading && <p className="loading-text">Loading users...</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && users.length === 0 && (
        <p className="empty-text">No users found.</p>
      )}

      {!loading && users.length > 0 && (
        <table className="user-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Password (Hashed)</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td style={{ fontFamily: "monospace", color: "#888" }}>
                  {user.password || "********"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
