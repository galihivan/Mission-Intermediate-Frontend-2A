import { useState } from "react";
import main from "../../../Data/mainData.js";
import HeroSection from "./HeroSection.jsx";
import Card from "./Card.jsx";
import NavbarBeranda from "./NavbarBeranda.jsx";
import Cart from "../../Cart/index.jsx"; 

const MainBeranda = () => {
  const { heroHeader, mainHeader, heroFooter, mainCard } = main;
  const [activeIndex, setActiveIndex] = useState(0);
  const [cart, setCart] = useState([]); // State to hold cart items

  const handleNavActive = (index) => {
    setActiveIndex(index);
  };

  // Handle adding items to the cart
  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <main className="h-auto w-full flex flex-col px-5 xl:px-[120px]">
      <Cart cartItems={cart} setCart={setCart} /> {/* Pass cart data and functions to Cart */}

      <HeroSection
        image={heroHeader.image}
        title={heroHeader.title}
        subtitle={heroHeader.subtitle}
        button={heroHeader.button}
        isFooter={false}
      />
      <main className="flex flex-col text-dark-primary gap-6 xl:gap-8">
        <header className="flex flex-col gap-[10px]">
          <h3 className="font-pop text-2xl xl:text-4xl font-semibold">
            {mainHeader.title}
          </h3>
          <p className="text-dark-secondary text-sm xl:text-base font-medium">
            {mainHeader.subtitle}
          </p>
        </header>
        <NavbarBeranda
          navbar={mainHeader.navbar}
          activeIndex={activeIndex}
          handleNavActive={handleNavActive}
        />
        <main className="w-full flex flex-wrap gap-5 xl:gap-5 justify-center">
          {mainCard.map((item) => (
            <Card
              key={item.id}
              cardImage={item.cardImage}
              cardTitle={item.cardTitle}
              cardDescription={item.cardDescription}
              trainerImage={item.trainerImage}
              trainer={item.trainer}
              trainerJob={item.trainerJob}
              trainerCompany={item.trainerCompany}
              cardRating={item.cardRating}
              cardPrice={item.cardPrice}
              onClick={() => handleAddToCart(item)} // Add to cart handler
            />
          ))}
        </main>
      </main>
      <HeroSection
        image={heroFooter.image}
        title={heroFooter.title}
        subtitle={heroFooter.subtitle}
        button={heroFooter.button}
        isFooter={true}
        titleSection={heroFooter.titleSection}
      />
    </main>
  );
};

export default MainBeranda;