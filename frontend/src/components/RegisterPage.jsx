import { useState } from "react";
import { toast } from "react-toastify";
import { AxiosInstance } from "../routes/axiosInstance";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  let navigate = useNavigate()

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInputs = (data) => {
    let { username, email, password, confirmpassword } = data;
    if (username.trim() === "") {
      toast.error("enter username");
      return false;
    } else if (username.trim().length < 6) {
      toast.error("username should be atleast 6 characters");
      return false;
    } else if (email.trim() === "") {
      toast.error("Enter email");
      return false;
    } else if (password.trim().length < 8) {
      toast.error("password should be atleast 8 characters");
      return false;
    } else if (confirmpassword.trim() !== password.trim()) {
      toast.error("password mismatch");
      return false;
    } else {
      console.log("Good to go");
      return true;
    }
  };

  const register = async (e) => {
    e.preventDefault();
    if (!validateInputs(formData)) return;

    try {
      let response = await AxiosInstance.post(`/users`, formData);
      console.log(response);

      toast.success("Signup Successfully");
      
      // navigate to Login.jsx
      navigate("/login")

      // reset form fields
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      })

    } catch (error) {
      toast.error("Unable to register");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-2">
      <div className="w-full max-w-xs sm:max-w-md bg-white rounded-2xl shadow-2xl p-4 sm:p-8 mt-8">
        <h1 className="font-bold text-3xl sm:text-4xl text-center text-black mb-3">Register</h1>
        <form>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="username" className="font-semibold text-sm text-gray-700">Username</label>
            <input
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition text-sm sm:text-base"
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="email" className="font-semibold text-sm text-gray-700">Email</label>
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
          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="password" className="font-semibold text-sm text-gray-700">Password</label>
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
          <div className="flex flex-col gap-1 mb-7">
            <label htmlFor="confirmpassword" className="font-semibold text-sm text-gray-700">Confirm Password</label>
            <input
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black transition text-sm sm:text-base"
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              autoComplete="off"
            />
          </div>
          <button
            onClick={register}
            className="w-full bg-black text-white font-semibold py-2 rounded-lg shadow text-sm sm:text-base"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
