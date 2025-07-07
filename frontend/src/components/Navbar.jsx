import { IoCart } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CartDrawer from "./CartDrawer";
import { useContext, useEffect, useState } from "react";
import { AxiosInstance } from "../routes/axiosInstance";
import { AuthGlobalContext } from "../context/AuthContext";

const Navbar = () => {
  const [menuToggle, setMenuToggled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { loggedInUser, setLoggedInUser, checkLoggedInUser } = useContext(AuthGlobalContext);

  let navigate = useNavigate();

  useEffect(() => {
    checkLoggedInUser(); // on mount
  }, []);

  const handleLogout = async () => {
    await AxiosInstance.post("/user/logout");
    setLoggedInUser(false);
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuToggled(!menuToggle);
  };
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const categories = [
    { id: "home", title: "Home", path: "/home" },
    { id: "products", title: "Products", path: "/products" },
    { id: "men", title: "Men" },
    { id: "women", title: "Women" },
    { id: "kids", title: "Kids" },
    { id: "footware", title: "Footware" },
    { id: "accessories", title: "Accessories" },
    { id: "search", title: "Search" },
  ];

  // const handleLogout = async () => {
  //   await AxiosInstance.post("/user/logout");
  //   setAccessToken(false);
  //   toast.success("logged out");
  //   navigate("/login");
  // };

  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <nav className="fixed top-0 left-0 h-[70px] w-full bg-white flex items-center justify-between px-4 md:px-8 shadow z-50">
      <div className="font-extrabold text-2xl md:text-3xl text-black select-none">MyApp</div>
      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Desktop menu */}
      {loggedInUser ? (
        <section className="hidden md:flex gap-2">
          {categories.map((ele) => (
            <Link to={ele.path ? ele.path : "/home"} key={ele.id}>
              <div className="p-2 md:p-4 font-semibold hover:bg-gray-100 rounded transition">
                {ele.title}
              </div>
            </Link>
          ))}
        </section>
      ) : null}
      <aside className="hidden md:flex gap-4 font-semibold items-center">
        {loggedInUser ? (
          <>
            <div>
              <CartDrawer />
            </div>
            <div className="relative" onClick={toggleMenu}>
              <Avatar sx={{ bgcolor: "black" }} {...stringAvatar("Rohit Sharma")} />
              {menuToggle ? (
                <div className="absolute min-w-40 p-2 right-0 bg-white rounded shadow-lg top-12 z-50 border border-gray-200">
                  <ul className="flex flex-col gap-2">
                    <li
                      onClick={handleLogout}
                      className="hover:bg-gray-100 px-2 py-1 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="bg-white text-blue-600 px-4 md:px-6 py-2 rounded-lg shadow hover:bg-blue-100 transition font-bold border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Login
              </button>
            </Link>
            <Link to={"/"}>
              <button className="bg-blue-500 text-white px-4 md:px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition font-bold border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200">
                Signup
              </button>
            </Link>
          </>
        )}
      </aside>
      {/* Mobile menu */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-50 md:hidden"
          onClick={toggleMobileMenu}
        >
          <div
            className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {loggedInUser ? (
              <>
                <section className="flex flex-col gap-2">
                  {categories.map((ele) => (
                    <Link
                      to={ele.path ? ele.path : "/home"}
                      key={ele.id}
                      onClick={toggleMobileMenu}
                    >
                      <div className="p-2 font-semibold hover:bg-gray-100 rounded transition">
                        {ele.title}
                      </div>
                    </Link>
                  ))}
                </section>
                <div className="flex gap-2 mt-4">
                  <CartDrawer />
                  <button
                    onClick={handleLogout}
                    className="bg-gray-200 px-4 py-2 rounded font-semibold"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to={"/login"} onClick={toggleMobileMenu}>
                  <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition font-bold border border-blue-200 mb-2">
                    Login
                  </button>
                </Link>
                <Link to={"/"} onClick={toggleMobileMenu}>
                  <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition font-bold border border-blue-600">
                    Signup
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
