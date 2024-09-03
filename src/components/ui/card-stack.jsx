import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop());
      return newArray;
    });
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift());
      return newArray;
    });
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    const newCards = [...cards];
    while (currentIndex !== index) {
      goToNext();
    }
    setCards(newCards);
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[calc(16rem+2rem)] w-64 sm:h-[calc(20rem+2.5rem)] sm:w-80 md:h-[calc(24rem+3rem)] md:w-96 lg:h-[calc(28rem+3.5rem)] lg:w-[36rem] xl:h-[calc(32rem+4rem)] xl:w-[40rem]">
      {/* Previous Arrow */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-[-2rem] sm:left-[-2.5rem] md:left-[-3rem] transform -translate-y-1/2 p-1 sm:p-1.5 md:p-2 rounded-full bg-chamBray hover:bg-oxfordBlue transition cursor-pointer z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Cards */}
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-richBlack bg-white h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[36rem] xl:h-[32rem] xl:w-[40rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="relative group">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover rounded-2xl sm:rounded-3xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl sm:rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center p-4 sm:p-6 md:p-8 text-sm sm:text-base md:text-lg">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Next Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-[-2rem] sm:right-[-2.5rem] md:right-[-3rem] transform -translate-y-1/2 p-1 sm:p-1.5 md:p-2 rounded-full bg-chamBray hover:bg-oxfordBlue transition cursor-pointer z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-2 sm:mt-3 md:mt-4 absolute bottom-0 left-0 right-0">
        {cards.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 mx-1 sm:mx-1.5 md:mx-2 rounded-full ${
              currentIndex === index ? "bg-chamBray" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
