import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>login</button>
        <p>Houve um Erro!!!</p>
        <span>
          Você não tem Conta? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
