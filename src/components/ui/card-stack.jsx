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
    <div className="relative h-[calc(24rem+3rem)] w-96 md:h-[calc(24rem+3rem)] md:w-[40rem]">
      {/* Previous Arrow */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-[-3rem] transform -translate-y-1/2 p-2 rounded-full bg-chamBray hover:bg-oxfordBlue transition cursor-pointer z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
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
            className="absolute dark:bg-richBlack bg-white h-96 w-96 md:h-96 md:w-[40rem] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, // decrease z-index for the cards that are behind
            }}
          >
            <div className="relative group">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-96 object-cover rounded-3xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center p-8">{card.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Next Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-[-3rem] transform -translate-y-1/2 p-2 rounded-full bg-chamBray hover:bg-oxfordBlue transition cursor-pointer z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
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
      <div className="flex justify-center mt-4 absolute bottom-0 left-0 right-0">
        {cards.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer w-4 h-4 mx-2 rounded-full ${
              currentIndex === index ? "bg-chamBray" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
