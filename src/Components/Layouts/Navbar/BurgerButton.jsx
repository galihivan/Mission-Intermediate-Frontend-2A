const BurgerButton = ({ onClick }) => {
  return (
    <button className="xl:hidden" onClick={onClick}>
      <span className="text-3xl text-[#4a5c4c]">&#9776;</span>
    </button>
  );
};

export default BurgerButton;