import { useState } from "react";
import auth from "../../../Data/authData.js";

const InputFieldPhone = (props) => {
  const { type, text, id, register, errors } = props;

  const country = auth[0].country;

  const [selectedCode, setSelectedCode] = useState(country[0].code);
  const [selectedFlag, setSelectedFlag] = useState(country[0].flag);

  const handleChange = (e) => {
    setSelectedCode(e.target.value);
    setSelectedFlag(country.find((c) => c.code === e.target.value).flag);
  };

  return (
    <section>
      <label className="text-slate-700 mb-1" htmlFor={id}>
        {text} <span className="text-red-500">*</span>
      </label>
      <section className="flex justify-between gap-3 md:gap-6">
        <section className="flex w-10/12 sm:w-5/12">
          <label className=" bg-slate-100 flex justify-center px-2 items-center rounded-s-xl w-5/12" htmlFor='country'>
            <img src={selectedFlag} width={24} />
          </label>
          <select
           {...register("country")}
            value={selectedCode}
            onChange={handleChange}
            className={`border border-gray-200 rounded-e-xl w-full focus:outline-primary-500 ${errors?.[id] && "border-red-500 focus:outline-red-500"}`}
            name='country'
            id='country'
          >
            {country.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code}
              </option>
            ))}
          </select>
        </section>
        <input
          className={`py-3 px-3 w-full border border-gray-200 rounded-xl focus:outline-primary-500 ${
            errors?.[id] && "border-red-500 focus:outline-red-500"
          }`}
          type={type}
          name={id}
          id={id}
          {...register("phone", {
            required: "Nomor telepon wajib diisi",
            minLength: {
              value: 10,
              message: "Nomor telepon minimal 10 angka",
            },
            maxLength: {
              value: 13,
              message: "Nomor telepon maksimal 13 angka",
            },
          })}
        />
      </section>
      {errors?.[id] && (
        <p className="text-red-500 text-xs mt-1 text-right w-full">
          {errors?.[id]?.message}
        </p>
      )}
    </section>
  );
};

export default InputFieldPhone;
