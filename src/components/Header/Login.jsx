import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Main/context/AuthContext.jsx";
const backendURL = import.meta.env.VITE_BACKEND_URL  || "http://localhost:5000";

export default function Login(props) {
    const { login } = useAuth();
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = props;

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendURL}/api/login`, loginInfo, {
        withCredentials: true,
      });

      const data = res.data;

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("personinfo", JSON.stringify(data.user));
        props.setpersoninfo(data.user);
        props.setissignup(true);
        setLoginInfo({ email: "", password: "" });
        alert("Login successful!");
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-400 px-4 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
        <p className="text-white mt-1 text-sm">
          Login to access your student portal.
        </p>
      </div>

      <div
        className={`${
          darkMode ? "bg-gray-100 text-black" : "bg-gray-100 text-black"
        } w-full max-w-md rounded-lg shadow-lg px-8 py-6`}
      >
        <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">
          Login
        </h2>
        <form className="space-y-4 text-left" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              autoComplete="email"
              name="email"
              placeholder="Enter your email"
              value={loginInfo.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password:
            </label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={loginInfo.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/#/signup" className="text-indigo-500 hover:underline">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}
