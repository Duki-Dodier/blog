import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Register</button>
        <p>Houve um Erro!!!</p>
        <span>
          Você já tem Conta? <Link to="/login">login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
