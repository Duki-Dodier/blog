import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post("/users", inputs);
      navigate("/login")
    } catch (e) {
      setError(e.request.responseText)
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {<p></p> && <p>{error}</p>}
        <span>
          Você já tem Conta? <Link to="/login">login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
