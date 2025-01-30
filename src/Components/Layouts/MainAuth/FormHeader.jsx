const FormHeader = ({ textH, textP }) => {
  return (
    <header className="flex flex-col items-center gap-2">
      <h1 className="text-2xl xl:text-3xl font-semibold text-slate-900 text-center font-pop">
        {textH}
      </h1>
      <p className="text-slate-500">{textP}</p>
    </header>
  );
};

export default FormHeader;
