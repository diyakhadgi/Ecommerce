import axios from "axios";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const username = useRef();
  const password = useRef();
  const history = useHistory();

  const loginHandler = async (e) => {
    e.preventDefault();

    const loginData = {
      username: username.current.value,
      password: password.current.value,
    };

    try {
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        loginData,
        {
          timeout: 1000,
        }
      );

      const getAccessToken = response.data.token;

      localStorage.setItem("accessTokenApi", getAccessToken);

      if (localStorage.getItem("accessTokenApi")) {
        alert("Logged in successfully");
        history.replace("/");
      } else {
        alert("Could not log in");
      }
    } catch (error) {
      alert("User does not exist");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/4">
        <h2 className="text-2xl text-center mb-6">Login</h2>
        <form onSubmit={loginHandler}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 p-6">
              Username
            </label>
            <input
              type="text"
              id="username"
              ref={username}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 p-6 outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 p-6">
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={password}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
