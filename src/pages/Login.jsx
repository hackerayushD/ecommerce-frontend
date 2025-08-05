import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { navigate } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post("/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post("/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Card */}
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 shadow-lg rounded-xl">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center text-gray-900">
          {currentState}
        </h2>
        <p className="mt-1 mb-6 text-sm text-center text-gray-500">
          {currentState === "Login"
            ? "Welcome back! Sign in to continue."
            : "Create your account to get started."}
        </p>

        {/* Form */}
        <form onSubmit={onSubmitHandler} className="space-y-4">
          {currentState !== "Login" && (
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          )}

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>

          {/* Links */}
          <div className="flex justify-between text-xs text-gray-500">
            <p className="cursor-pointer hover:underline">Forgot password?</p>
            {currentState === "Login" ? (
              <p
                onClick={() => setCurrentState("Sign Up")}
                className="cursor-pointer hover:underline"
              >
                Create account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState("Login")}
                className="cursor-pointer hover:underline"
              >
                Login here
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 mt-2 font-medium text-white transition-all duration-150 bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700"
          >
            {currentState === "Login" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
