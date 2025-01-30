import { useState } from "react";
import header from "../../../Data/header";
import { useLocation } from "react-router-dom";
import NavItems from "./NavItems";
import Logo from "./Logo";
import BurgerButton from "./BurgerButton";
import ProfileDropdown from "./ProfileDropdown";
const Navbar = ({ isLogin, handleLogout }) => {
  const location = useLocation();
  const [dropDown, setDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setDropDown(!dropDown);
    setMenuOpen(false);
  };
  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
    setDropDown(false);
  };

  return (
    <header className="w-full h-auto">
      <nav className="relative w-full h-auto bg-white border-b xl:border-none shadow-lg xl:shadow px-6 xl:px-[120px] py-4 xl:py-3 flex justify-between items-center">
        <Logo src={header.logo} alt="logo" />
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && (
            <>
              <BurgerButton onClick={handleBurgerClick} />
              <NavItems
                isMobile={false}
                isLogin={isLogin}
                profilePhoto={header.profilePhoto}
                onProfileClick={handleProfileClick}
                dropDown={dropDown}
              >
                <ProfileDropdown
                  dropdownItems={header.dropdown}
                  handleLogout={handleLogout}
                />
              </NavItems>
              {menuOpen && (
                <NavItems
                isMobile={true}
                isLogin={isLogin}
                profilePhoto={header.profilePhoto}
                onProfileClick={() => setDropDown(!dropDown)}
                dropDown={dropDown}
              >
                <ProfileDropdown
                  dropdownItems={header.dropdown}
                  handleLogout={handleLogout}
                />
              </NavItems>
              )}
            </>
          )}
      </nav>
    </header>
  );
};

export default Navbar;
