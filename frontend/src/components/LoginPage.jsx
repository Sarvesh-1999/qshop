import { useContext, useState } from "react";
import { AxiosInstance } from "../routes/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthGlobalContext } from "../context/AuthContext";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setLoggedInUser } = useContext(AuthGlobalContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const login = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await AxiosInstance.post(
  //       "/user/login",
  //       {
  //         email: formData.email,
  //         password: formData.password,
  //       },
  //       {
  //         withCredentials: true, // 🔐 Important to receive cookie from server
  //       }
  //     );

  //     const userName = response?.data?.data?.userName || "User";
  //     toast.success(`Welcome ${userName}`);
  //     navigate("/home");
  //   } catch (error) {
  //     console.error("Login error:", error?.response || error);
  //     const msg = error?.response?.data?.message || "Login failed";
  //     toast.error(msg);
  //   }
  // };

  const login = async (e) => {
    e.preventDefault();
    const res = await AxiosInstance.post("/user/login", {
      email: formData.email,
      password: formData.password,
    });
    if (res.data.success) {
      setLoggedInUser(true); // 🔐 Update immediately
      navigate("/home");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-violet-200 via-violet-100 to-white">
      <form
        onSubmit={login}
        className="shadow-2xl mt-16 p-8 rounded-xl bg-white min-w-[350px] w-full max-w-md border border-violet-100"
      >
        <h3 className="text-center font-bold text-3xl text-violet-700 mb-6 tracking-wide">Login</h3>

        {/* Email */}
        <div className="flex flex-col mb-5">
          <label htmlFor="email" className="mb-1 text-violet-700 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
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
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border border-violet-300 outline-violet-400 px-3 py-2 rounded focus:ring-2 focus:ring-violet-200 transition-all"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-violet-500 to-violet-700 w-full py-2 rounded-lg text-white font-semibold shadow-md hover:from-violet-600 hover:to-violet-800 hover:scale-105 transition-all duration-200 text-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
