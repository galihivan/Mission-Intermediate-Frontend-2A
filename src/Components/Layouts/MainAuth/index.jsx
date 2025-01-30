const Main = (props) => {
  const { children, classname } = props;
  return (
    <main className={`w-full flex justify-center items-center ${classname}`}>
      <section className={`w-11/12 text-sm md:w-8/12 xl:w-6/13 xl:text-base bg-white p-5 xl:p-9 border rounded flex flex-col items-center justify-center gap-5 xl:gap-9 `}>
        {children}
      </section>
    </main>
  );
};

export default Main;
