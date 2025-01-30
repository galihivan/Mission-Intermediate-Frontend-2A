const InputFieldCommon = (props) => {
    const { type, text, id, register, errors } = props;
    return (
      <section>
        <label className="text-slate-700 mb-1" htmlFor={id}>
          {text} <span className="text-red-500">*</span>
        </label>
        <input
          className={`py-3 px-3 w-full border border-gray-200 rounded-xl focus:outline-primary-500 ${errors?.[id] && "border-red-500 focus:outline-red-500"}`}
          type={type}
          name={id}
          id={id}
          {...register}
        />

        {errors?.[id] && (
          <span className="text-red-500 text-xs mt-1">{errors?.[id]?.message}</span>
        )}
      </section>
    );
  };

  export default InputFieldCommon;