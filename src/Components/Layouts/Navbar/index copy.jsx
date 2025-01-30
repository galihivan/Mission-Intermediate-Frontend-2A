import { useState } from "react";
import header from "../../../Data/header";
import Button from "../../Elements/Button";
import { useNavigate, useLocation } from "react-router-dom";
const Navbar = ({isLogin, handleLogout}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropDown, setDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 

  return (
    <header className="w-full h-auto">
      <nav className="relative w-full h-auto bg-white border-b xl:border-none shadow-lg xl:shadow px-6 xl:px-[120px] py-4 xl:py-3 flex justify-between items-center">
        <img
          className="xl:mx-[22px] max-sm:w-40 h-auto"
          src={header.logo}
          alt="logo"
        />
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && (
            <>
              <button
                className="xl:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="text-3xl text-[#4a5c4c]">&#9776;</span>
              </button>
              <section className={`relative hidden xl:flex items-center gap-9`}>
                <p className="text-dark-secondary font-medium cursor-pointer">
                  Kategori
                </p>
                {isLogin ? (
                  <>
                    <img
                      alt="profile"
                      className="w-11 h-11 rounded-xl cursor-pointer"
                      onClick={() => setDropDown(!dropDown)}
                      src={header.profilePhoto}
                    />
                    {dropDown && (
                      <ul
                        className={`absolute top-14 right-0 bg-white rounded-lg shadow-2xl py-1 w-52 cursor-pointer z-10`}
                      >
                        {header.dropdown.map((item, index) => (
                          <li
                            className={`text-dark-secondary font-medium px-3 py-4 hover:bg-slate-100 border-b ${
                              index === header.dropdown.length - 1 &&
                              "text-error-default hover:text-error-hover active:text-error-pressed gap-1 flex"
                            }`}
                            key={index}
                            onClick={
                              index === header.dropdown.length - 1
                                ? handleLogout
                                : undefined
                            }
                          >
                            {item}{" "}
                            {index === header.dropdown.length - 1 && (
                              <img src={header.logoutLogo} alt="logout" />
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <section className="flex gap-4">
                    <Button
                      className="bg-primary-500 text-white px-6"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                    <Button
                      className="bg-white text-primary-500 border border-primary-500 px-6"
                      onClick={() => navigate("/register")}
                    >
                      Register
                    </Button>
                  </section>
                )}
              </section>
              {menuOpen && (
                <section
                  className={`absolute xl:hidden top-[4.8rem] left-0 bg-white w-full flex flex-col rounded-b px-1 z-10`}
                >
                  <p className="text-dark-secondary font-medium cursor-pointer px-3 py-4 border-b">
                    Kategori
                  </p>
                  {isLogin ? (
                    <ul className={` cursor-pointer`}>
                      {header.dropdown.map((item, index) => (
                        <li
                          className={`text-dark-secondary font-medium px-3 py-4 hover:bg-slate-100 border-b ${
                            index === header.dropdown.length - 1 &&
                            "text-error-200 gap-1 flex"
                          }`}
                          key={index}
                          onClick={
                            index === header.dropdown.length - 1
                              ? handleLogout
                              : undefined
                          }
                        >
                          {item}{" "}
                          {index === header.dropdown.length - 1 && (
                            <img src={header.logoutLogo} alt="logout" />
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <section className="flex flex-col gap-2 p-3">
                      <Button
                        className="bg-primary-500 text-white px-6"
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </Button>
                      <Button
                        className="bg-white text-primary-500 border border-primary-500 px-6"
                        onClick={() => navigate("/register")}
                      >
                        Register
                      </Button>
                    </section>
                  )}
                </section>
              )}
            </>
          )}
      </nav>
    </header>
  );
};

export default Navbar;
