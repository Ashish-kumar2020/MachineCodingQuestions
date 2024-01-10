import React, { useEffect, useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState("");
  const [auth] = useState({
    email: "ashishsingh@gmail.com",
    password: "12345",
  });

  const checkAuth = () => {
    if (email === auth.email && password === auth.password) {
      console.log("Email Login successful");
      setEmail("");
      setPassword("");
      setIsLogin(true);
    } else {
      console.log("Wrong email and password");
      setEmail("");
      setPassword("");
      setIsLogin(false);
    }
  };

  useEffect(() => {
    if (isLogin) {
      setMessage("Login successful");
    }
  }, [isLogin]);

  return (
    <div className="auth-container">
      <form
        className="auth-form"
        onSubmit={(e) => {
          e.preventDefault();
          checkAuth();
        }}
      >
        <label>Email:</label>
        <input
          type="email"
          value={email}
          placeholder="youremail@example.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className={`message ${isLogin ? "success" : "error"}`}>
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default Auth;
