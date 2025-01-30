import { useState } from "react";
import auth from "../../../Data/authData.js";
const InputSelect = (props) => {
  const { text, id, register, errors } = props;
  const gender = auth[0].gender;

  const [selectedGender, setSelectedGender] = useState(gender[0].option);

  const handleChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <section>
      <label className="text-slate-700 mb-1" htmlFor={id}>
        {text} <span className="text-red-500">*</span>
      </label>
      <select
      className={`py-3 px-3 w-full border border-gray-200 rounded-xl focus:outline-primary-500 ${errors?.[id] && "border-red-500 focus:outline-red-500"}`}
        {...register(id, {
          required: `${text} harus diisi!`,
        })}
        value={selectedGender}
        onChange={handleChange}
        name={id}
        id={id}
      >
        {gender.map((g, i) => (
          <option key={i} value={g.value}>
            {g.option}
          </option>
        ))}
      </select>
      {errors?.[id] && (
        <p className="text-red-500 text-xs mt-1 text-right w-full">
          {errors?.[id]?.message}
        </p>
      )}
    </section>
  );
};

export default InputSelect;
