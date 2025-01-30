import Button from "../../Elements/Button";
import InputEmail from "./InputEmail";

const HeroSection = ({
  image,
  title,
  subtitle,
  button,
  isFooter,
  titleSection,
}) => {
  return (
    <header
      className={`relative flex flex-col items-center w-full h-[400px] rounded-xl my-7 xl:my-16 overflow-hidden`}
    >
      <img
        className="w-full h-full absolute object-cover -z-10"
        src={image}
        alt={isFooter ? "hero-footer" : "hero-header"}
      />
      <section
        className={`flex flex-col ${
          isFooter ? "justify-center" : "items-center justify-center"
        } bg-[#000000CC] h-full w-full px-5 ${
          isFooter ? "xl:px-[337px] gap-10" : "xl:px-[140px] py-16 gap-6"
        }  text-white text-center rounded-xl`}
      >
        <section className="flex flex-col gap-1">
          {isFooter && (
            <h3 className="font-medium text-base tracking-wide xl:text-lg text-light-secondary">
              {titleSection}
            </h3>
          )}
          <section className="flex flex-col gap-3">
            <h1
              className={`font-pop text-2xl ${
                isFooter
                  ? "font-semibold xl:text-[32px]"
                  : "md:text-3xl xl:text-5xl font-bold"
              } `}
            >
              {title}
            </h1>
            <p
              className={`${
                isFooter ? "" : "font-medium"
              } text-sm md:text-base`}
            >
              {subtitle}
            </p>
          </section>
        </section>
        {isFooter ? (
          <InputEmail buttonText={button} />
        ) : (
          <Button className="bg-primary-500 hover:bg-green-500 px-4 text-xs md:text-base">
            {button}
          </Button>
        )}
      </section>
    </header>
  );
};

export default HeroSection;
