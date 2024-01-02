import React, { useRef, useState } from "react";
import { RowProps } from "./row.props";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import Thumbnail from "../thumbnail/thumbnail";
const Row = ({ title, movies, isBig = false }: RowProps) => {
  const [moved, setMoved] = useState<Boolean>(false);
  const [lastRight, setLastRight] = useState<Boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const handleClick = (direction: "right" | "left") => {
    setMoved(true);
    setLastRight(false);
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      carouselRef.current?.scrollTo({ left: scrollTo, behavior: "smooth" });
      if (scrollTo <= 0) {
        setMoved(false);
      }
      if (
        scrollTo >
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth
      ) {
        setLastRight(true);
      }
    }
  };
  return (
    <div className="flex flex-col space-y-2 py-20 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:center">
      <h2 className="w-56 cursor-pointer text-sm md:text-2xl font-semibold text-[#e5e5e5] hover:text-white transition duration-200">
        {title}
      </h2>
      {/* Carusel */}
      <div className="group relative  md:ml-2">
        <AiFillCaretLeft
          onClick={() => {
            handleClick("left");
          }}
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto  h-6 w-6 cursor-pointer opacity-0  group-hover:opacity-100 transition duration-200 hover:scale-125 ${
            !moved && "hidden"
          } `}
        />
        <div
          ref={carouselRef}
          className={`flex scrollbar-hide items-center ${
            !isBig && "space-x-1 md:space-x-2"
          }  overflow-hidden overflow-x-scroll `}
        >
          {movies.map((movie) => (
            <Thumbnail isBig={isBig} movie={movie} key={movie.id} />
          ))}
        </div>
        <AiFillCaretRight
          onClick={() => {
            handleClick("right");
          }}
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto  h-6 w-6 cursor-pointer opacity-0  group-hover:opacity-100 transition duration-200 hover:scale-125 ${
            lastRight && "hidden"
          }`}
        />
      </div>
    </div>
  );
};

export default Row;
