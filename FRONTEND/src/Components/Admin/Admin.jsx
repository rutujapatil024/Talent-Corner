// admin.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLogin from "../Admin/AdminLogin"; // adjust path if needed
import "./admin.css";

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("adminAuth") === "true" // 👈 load from localStorage
  );
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchFormData = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/form");
          setFormDataList(response.data);
        } catch (error) {
          console.error("Error fetching form data:", error);
        }
      };

      fetchFormData();
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    localStorage.setItem("adminAuth", "true"); // 👈 save login state
    setIsAuthenticated(true);
  };

  return !isAuthenticated ? (
    <AdminLogin onLogin={handleLogin} />
  ) : (
    <div className="admin-panel">

     <div className="logout-container">
  <button
    onClick={() => {
      localStorage.removeItem("adminAuth");
      setIsAuthenticated(false);
    }}
  >
    Logout
  </button>
</div>


      <h2>User Submissions</h2>
      {formDataList.length === 0 ? (
        <p>No submissions found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Interest</th>
            </tr>
          </thead>
          <tbody>
            {formDataList.map((user, index) => (
              <tr key={index}>
                <td>
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.interest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPanel;
