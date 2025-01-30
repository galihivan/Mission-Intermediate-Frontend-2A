const FormInput = (props) => {
    const { children } = props;
    return (
      <section className="flex flex-col gap-3 xl:gap-4">
        {children}
        <p className="text-slate-700 font-medium w-full text-right cursor-pointer">
          Lupa Password?
        </p>
      </section>
    );
  };

  export default FormInput