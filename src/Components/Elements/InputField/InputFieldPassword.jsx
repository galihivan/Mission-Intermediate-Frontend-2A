import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputFieldPassword = (props) => {
  const { text, id, register, errors } = props;

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <section>
      <label className="text-slate-700 mb-1" htmlFor={id}>
        {text} <span className="text-red-500">*</span>
      </label>
      <section className="relative">
        <input
          className={`py-3 px-3 w-full border border-gray-200 rounded-xl focus:outline-primary-500 ${
            errors?.[id] && "border-red-500 focus:outline-red-500"
          }`}
          type={open ? "text" : "password"}
          onPaste={(e) => {
            e.preventDefault();
            return false;
          }}
          name={id}
          id={id}
          {...register}
        />
        <section className="absolute top-3 right-4 opacity-40 text-2xl cursor-pointer">
          {open ? <FaEyeSlash onClick={toggle} /> : <FaEye onClick={toggle} />}
        </section>
      </section>
      <section className="text-red-500 text-xs mt-1">
        {errors?.[id] && <span>{errors[id].message}</span>}
      </section>
    </section>
  );
};

export default InputFieldPassword;
