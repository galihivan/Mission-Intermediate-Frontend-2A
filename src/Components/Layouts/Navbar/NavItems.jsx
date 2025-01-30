import AuthButtons from "./AuthButtons";

const NavItems = ({isLogin, profilePhoto, onProfileClick, dropDown, children, isMobile}) => {
  return (
    <section className={`${isMobile ? "absolute xl:hidden top-[4.8rem] left-0 bg-white w-full flex flex-col rounded-b px-1 z-10" : "relative hidden xl:flex items-center gap-9"}`}>
      <p className={`text-dark-secondary font-medium cursor-pointer ${isMobile && "px-3 py-4 border-b"}`}>Kategori</p>
      {isLogin ? (
        <>
          <img
            alt="profile"
            className={`w-11 h-11 rounded-xl cursor-pointer ${isMobile && "hidden"}`}
            onClick={onProfileClick}
            src={profilePhoto}
          />
          {isMobile ? children : (dropDown && children)}
        </>
      ) : (
        <AuthButtons />
      )}
    </section>
  );
};

export default NavItems;
