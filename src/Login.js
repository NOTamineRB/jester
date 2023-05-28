import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [vault, setVault] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform your login logic here
    // For simplicity, we'll just call the onLogin function to set isLoggedIn to true
    onLogin();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-gray-300  " onSubmit={handleSubmit}>
        <div className="justify-center items-center"></div>
        <h1 className="text-xl font-bold text-center">
          Connectz-vous avec un compte M-Files
        </h1>
        <div className="flex flex-col">
          <label className="text-sm mt-2 mb-2" htmlFor="username">
            Login{" "}
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Votre login"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm mt-2 mb-2" htmlFor="password">
            Password{" "}
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Votre mot de passe "
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm mt-2 mb-2" htmlFor="vault">
            Coffre{" "}
          </label>
          <input
            type="text"
            id="vault"
            value={vault}
            onChange={(e) => setVault(e.target.value)}
            placeholder="GUID du coffre"
          />
        </div>
        <button className="bg-orange-500 hover:bg-orange-500 p-2 mt-2 rounded-sm p-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
