import React from "react";
import { ThumbnailProps } from "./thumbnail.props";
import Image from "next/image";
import { image_base } from "src/helpers/constants";
import ReactStars from "react-stars";

const Thumbnail = ({ movie, isBig = false }: ThumbnailProps) => {
  return (
    <div
      className={`relative ${
        isBig
          ? "h-[450px] md:h-[550px] min-w-[350px] md:min-w-[470px]"
          : "h-[330px] md:h-[440px] min-w-[200px] md:min-w-[292px]"
      } transition duration-200  md:hover:scale-110 cursor-pointer ease-out `}
    >
      <Image
        src={`${image_base}${movie.backdrop_path || movie.poster_path}`}
        alt={`${
          movie?.title ||
          movie?.name ||
          movie.original_title ||
          movie.original_name
        }`}
        fill
        className="object-cover  "
      />
      <div className=" absolute bottom-4 left-2 flex flex-col items-center ">
        <div className="flex items-center space-x-2 ">
          <ReactStars
            edit={false}
            count={10}
            value={movie.vote_average}
            color2={"#fff"}
          />
          <p className="text-white">({movie.vote_count})</p>
        </div>
        <h1 className="text-2xl font-bold ">
          {movie?.title ||
            movie?.name ||
            movie.original_title ||
            movie.original_name}
        </h1>
      </div>
      <div className="absolute top-0 left-0 bg-black/50 w-full h-full"></div>
    </div>
  );
};

export default Thumbnail;
