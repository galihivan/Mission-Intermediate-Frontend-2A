const FooterUs = ({logo, motto, address, phone}) => {
  return (
    <section className="flex flex-col gap-4 xl:w-[30%]">
      <img className="xl:w-[204px] w-40" src={logo} alt="logo" />
      <section className="flex flex-col gap-2 xl:gap-3">
        <p className="text-base xl:text-lg font-bold">{motto}</p>
        <p className="text-sm xl:text-base">{address}</p>
        <p className="text-sm xl:text-base">{phone}</p>
      </section>
    </section>
  );
};

export default FooterUs;
