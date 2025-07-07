/* eslint-disable no-unused-vars */
import { useState } from "react";
import { toast } from "react-toastify";
import { AxiosInstance } from "../routes/axiosInstance";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await AxiosInstance.post("/user/register", {
        userName: formData.username,
        email: formData.email,
        password: formData.password,
      });

      toast.success("Registered successfully");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error?.response || error.message);
      const msg = error?.response?.data?.message || "Something went wrong during registration";
      toast.error(msg);
    }

    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-violet-200 via-violet-100 to-white">
      <form
        onSubmit={register}
        className="shadow-2xl mt-16 p-6 rounded-xl bg-white min-w-[350px] w-full max-w-md border border-violet-100"
      >
        <h3 className="text-center font-bold text-3xl text-violet-700 mb-3 tracking-wide">
          Register
        </h3>

        {/* Username */}
        <div className="flex flex-col mb-4">
          <label htmlFor="username" className="mb-1 text-violet-700 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="border border-violet-300 outline-violet-400 px-3 py-2 rounded focus:ring-2 focus:ring-violet-200 transition-all"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-1 text-violet-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border border-violet-300 outline-violet-400 px-3 py-2 rounded focus:ring-2 focus:ring-violet-200 transition-all"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col mb-7">
          <label htmlFor="password" className="mb-1 text-violet-700 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border border-violet-300 outline-violet-400 px-3 py-2 rounded focus:ring-2 focus:ring-violet-200 transition-all"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-violet-500 to-violet-700 w-full py-2 rounded-lg text-white font-semibold shadow-md hover:from-violet-600 hover:to-violet-800 hover:scale-105 transition-all duration-200 text-lg"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
