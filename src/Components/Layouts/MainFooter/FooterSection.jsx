import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const FooterSection = ({title, items}) => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="flex flex-col gap-4">
      <button
        type="button"
        className="flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold ">{title}</span>
        <IoIosArrowForward className="xl:hidden" />
      </button>
      <ul className={`xl:flex flex-col gap-3 ${isOpen ? "flex" : "hidden"}`}>
        {items.map((item, index) => (
          <li className="text-slate-500 font-medium cursor-pointer" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterSection;
