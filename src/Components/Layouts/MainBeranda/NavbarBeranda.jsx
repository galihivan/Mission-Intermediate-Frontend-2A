const NavbarBeranda = ({ navbar, activeIndex, handleNavActive }) => {
  return (
    <section className="font-medium text-sm xl:text-base">
      {navbar.map((item, index) => (
        <button
          key={index}
          type="button"
          className={`pr-9 py-3 hover:text-tertiary-500 relative ${activeIndex === index ? "text-tertiary-500" : "text-dark-secondary"}`} // Perbaikan disini
          onClick={() => handleNavActive(index)}
        >
          {item}
          {activeIndex === index && (
            <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-tertiary-500"></span>
          )}
        </button>
      ))}
    </section>
  );
};

export default NavbarBeranda;
