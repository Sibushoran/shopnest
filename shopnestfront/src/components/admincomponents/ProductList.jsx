import React, { useEffect, useState } from "react";
import axios from "axios";
import './ProductList.css';

const BACKEND_URL = import.meta.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BACKEND_URL}/api/products`);
        setProducts(res.data.products || []);
      } catch (err) {
        console.error("❌ Error fetching products:", err);
        alert("Failed to fetch products. Check console.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [refresh]);

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      const res = await axios.delete(`${BACKEND_URL}/api/products/${id}`);
      console.log("✅ Deleted:", res.data);
      alert("Product deleted successfully.");
      setRefresh((prev) => !prev);
    } catch (err) {
      console.error("❌ Error deleting product:", err);
      alert("Failed to delete product. Check console.");
    }
  };

  return (
    <div className="product-list">
      <h2>All Products</h2>

      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name || product.title}</td>
                <td>{product.brand || "-"}</td>
                <td>${product.price?.toFixed(2) || "0.00"}</td>
                <td>{product.rating || 0}★</td>
                <td>
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
