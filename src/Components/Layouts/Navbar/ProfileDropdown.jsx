import { RxExit } from "react-icons/rx";

const ProfileDropdown = ({ dropdownItems, handleLogout }) => {
  return (
    <ul
      className={`xl:absolute xl:top-14 xl:right-0 xl:bg-white xl:rounded-lg xl:shadow-2xl xl:py-1 xl:w-52 cursor-pointer xl:z-10`}
    >
      {dropdownItems.map((item, index) => (
        <li
          className={`text-dark-secondary font-medium px-3 py-4 hover:bg-slate-100 border-b ${
            index === dropdownItems.length - 1 &&
            "text-error-default hover:text-error-hover active:text-error-pressed gap-1 flex"
          }`}
          key={index}
          onClick={
            index === dropdownItems.length - 1 ? handleLogout : undefined
          }
        >
          {item}{" "}
          {index === dropdownItems.length - 1 && (
            <RxExit className="text-2xl text-error-default" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProfileDropdown;
