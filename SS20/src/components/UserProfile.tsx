import React, { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setSubmitted(true); 
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h3>Thông tin người dùng</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }}
        />
        <input
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }}
        />
        <button type="submit" style={{ background: "green", color: "white", padding: "8px 16px", border: "none", borderRadius: "4px" }}>
          Gửi
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px", padding: "10px", background: "#e6ffe6", borderRadius: "6px" }}>
          <p><b>Tên:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
