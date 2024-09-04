import { useState } from "react";

export const CarouselButton = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const handleScroll = () => {
    setScrolling(!scrolling);
  };

  return (
    <>
      <button onClick={handleScroll} className="carousel-button">
        {">"}
      </button>
    </>
  );
};
