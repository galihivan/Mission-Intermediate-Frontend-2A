import Button from "../../Elements/Button";

const InputEmail = ({buttonText}) => {
  return (
    <section className="xl:relative flex flex-col gap-4 xl:block">
      <input
        className="rounded-xl xl:px-8 py-3 xl:py-[18px] w-full text-center xl:text-left text-dark-primary"
        type="text"
        placeholder="Masukkan Emailmu"
      />
      <Button className="bg-secondary-500 hover:bg-yellow-500 px-6 static xl:absolute xl:top-1/2 xl:right-2 xl:-translate-y-1/2">
        {buttonText}
      </Button>
    </section>
  );
};

export default InputEmail;
