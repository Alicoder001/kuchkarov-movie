import React from "react";
import { ThumbnailProps } from "./thumbnail.props";
import Image from "next/image";
import { image_base } from "src/helpers/constants";

const Thumbnail = ({ movie }: ThumbnailProps) => {
  return (
    <div className="relative h-[340px] md:h-[440px] transition duration-200 min-w-[292px] md:min-w-[292px] md:hover:scale-110 cursor-pointer ease-out">
      <Image
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
  );
};

export default Thumbnail;
