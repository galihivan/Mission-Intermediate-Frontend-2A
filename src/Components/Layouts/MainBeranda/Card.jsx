import { useState } from "react";

const Card = ({
  onClick,
  onAddToCart, 
  cardImage,
  cardTitle,
  cardDescription,
  trainerImage,
  trainer,
  trainerJob,
  trainerCompany,
  cardRating,
  cardPrice,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({
      cardImage,
      cardTitle,
      cardDescription,
      trainer,
      cardPrice,
    });
  };

  return (
    <div
      className={`cursor-pointer relative w-full xl:w-[32%] h-auto bg-light-primary hover:bg-slate-50 rounded-xl border border-[#3A35411F] p-4 xl:p-5 flex flex-col gap-2 xl:gap-4 ${isHovered && "shadow-xl"}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute w-full h-full bg-gradient-to-b from-[#ffbd3ab4] to-[#ffbd3af8] top-0 left-0 rounded-xl transition-opacity duration-200 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <p className="text-white h-full flex items-end pb-10 justify-center md:text-4xl text-sm font-extrabold" onClick={handleAddToCart}>
          Add to cart
        </p>
      </div>
      <section className={`flex flex-row xl:flex-col gap-3 xl:gap-4 items-center xl:items-stretch`}>
        <header>
          <img
            src={cardImage}
            alt={cardTitle}
            className="rounded-xl w-[82px] h-[82px] xl:w-full xl:h-[193px] object-cover object-center"
          />
        </header>
        <section className="flex flex-col gap-2 xl:gap-4 flex-1">
          <section className="flex flex-col gap-2">
            <h6 className="font-pop text-base xl:text-lg font-semibold">
              {cardTitle}
            </h6>
            <p className="text-dark-secondary text-base font-medium hidden xl:block">
              {cardDescription.length > 79 ? `${cardDescription.substring(0, 79)}...` : cardDescription}
            </p>
          </section>
          <section className="flex gap-2 xl:gap-[10px] items-center">
            <img
              src={trainerImage}
              alt={trainer}
              className="w-9 xl:w-[40px] h-9 xl:h-[40px] rounded-xl"
            />
            <section>
              <h3 className="text-sm xl:text-lg font-medium">{trainer}</h3>
              <p className="text-dark-secondary text-xs xl:text-base font-normal xl:font-medium">
                {trainerJob}
                <span className="hidden xl:inline"> di </span>
                <span className="hidden xl:inline font-bold">{trainerCompany}</span>
              </p>
            </section>
          </section>
        </section>
      </section>
      <footer className="flex justify-between">
        <section className="flex gap-2 items-center">
          <img src="./img/rating.png" alt="rating" />
          <p className="text-xs xl:text-sm text-dark-secondary font-medium underline">
            {cardRating}
          </p>
        </section>
        <p className="text-primary-500 font-semibold text-xl xl:text-2xl">
          {cardPrice}
        </p>
      </footer>
    </div>
  );
};

export default Card;
