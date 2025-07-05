import React, { useState } from "react";
import { useApi } from "../utilities/utilities";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  let allUsers = useApi("/users");
  console.log(allUsers);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);

    let authUser = allUsers.find((singleUser) => {
      return (
        singleUser.email === formData.email &&
        singleUser.password === formData.password
      );
    });

    console.log(authUser);

    if (authUser) {
      // toast message
      toast.success("Login Successful");

      // navigate Home.jsx
      navigate("/home");

      // store token in localStorage
      localStorage.setItem("accesstoken", Date.now());
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-2">
      <div className="w-full max-w-xs sm:max-w-md bg-white rounded-2xl shadow-2xl p-4 sm:p-8">
        <h1 className="font-bold text-3xl sm:text-4xl text-center text-black mb-4">
          Login
        </h1>
        <form>
          <div className="flex flex-col gap-1 mb-5">
            <label
              htmlFor="email"
              className="font-semibold text-sm text-gray-700"
            >
              Email
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition text-sm sm:text-base"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-1 mb-7">
            <label
              htmlFor="password"
              className="font-semibold text-sm text-gray-700"
            >
              Password
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition text-sm sm:text-base"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="off"
            />
          </div>
          <button
            onClick={login}
            className="w-full bg-black text-white font-semibold py-2 rounded-lg shadow transition text-sm sm:text-base"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
