import React, { useEffect, useState } from "react";
import { HeroProps } from "./hero.props";
import { IMovie } from "src/interfaces/app.interface";
import Image from "next/image";
import { image_base } from "src/helpers/constants";
import { TbPlayerPlay } from "react-icons/tb";
import ReactStars from "react-stars";

const Hero = ({ trending }: HeroProps): JSX.Element => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie);
  useEffect(() => {
    const randomMovie = trending[Math.floor(Math.random() * trending.length)];
    setMovie(randomMovie);
  }, []);

  return (
    <div className="space-y-2  md:space-y-4 lg:h-[65vh] lg:justify-end">
      <div className="absolute top-0 left-0  h-[95vh] w-full -z-10">
        <Image
          priority={true}
          src={`${image_base}${movie.backdrop_path || movie.poster_path}`}
          alt={`${
            movie?.title ||
            movie?.name ||
            movie.original_title ||
            movie.original_name
          }`}
          fill
          className="object-cover"
        />
      </div>
      <div className="px-[8px] py-[4px]  text-center justify-center rounded-bl-[8px] rounded-tr-[8px] bg-[#e5e5e5]/50 w-[111px]">
        {movie.media_type}
      </div>
      <div className="flex items-center space-x-2">
        <ReactStars
          edit={false}
          count={10}
          value={movie.vote_average}
          color2={"#fff"}
        />
        <p>({movie.vote_count})</p>
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
        {movie?.title ||
          movie?.name ||
          movie.original_title ||
          movie.original_name}
      </h1>
      <p className="max-w-xs md:max-w-lg lg:max-w-2xl text-xs md:text-lg lg:text-2xl text-shadow-md">
        {movie?.overview?.slice(0, 100)}...
      </p>
      <div className="">
        <button className="flex justify-center items-center space-x-2 bg-white/40 font-bold text-black w-[200px] h-[56px] rounded-full ">
          <TbPlayerPlay className="h-5 w-5 md:h-8 md:w-8" /> Watch now
        </button>
      </div>
    </div>
  );
};

export default Hero;
