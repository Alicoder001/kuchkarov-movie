import MuiModal from "@mui/material/Modal";
import { useInfoState } from "src/store";
import { FaPlay, FaTimes } from "react-icons/fa";
import { API_REQUEST } from "src/services/api.service";
import { useEffect, useState } from "react";
import { Element } from "src/interfaces/app.interface";
import ReactPlayer from "react-player";
import { BiPlus } from "react-icons/bi";
import { BsVolumeDown, BsVolumeMute } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
const Modal = () => {
  const [isMute, setIsMute] = useState<boolean>(true);
  const [trailer, setTrailer] = useState<string>("");
  const { modal, setModal, currentMovie } = useInfoState();
  const handleClose = () => {
    setModal(false);
  };
  const api = `${API_REQUEST.base_url}/${
    currentMovie?.media_type === "tv" ? "tv" : "movie"
  }/${currentMovie.id}/videos?api_key=${API_REQUEST.api_key}&language=en-US`;
  console.log(trailer);
  useEffect(() => {
    const fetchVideoData = async () => {
      const data = await fetch(api).then((res) => res.json());
      console.log(data);
      if (data?.results) {
        const video =
          data?.results?.find((item: Element) => item.type === "Trailer") || "";
        setTrailer(video?.key);
      }
    };

    fetchVideoData();
  }, [currentMovie]);
  return (
    <MuiModal
      open={modal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll scrollbar-hide"
    >
      <>
        <button
          onClick={() => {
            setModal(false);
          }}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]"
        >
          <FaTimes />
        </button>
        <div className="relative pt-[55%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width={"100%"}
            height={"100%"}
            playing
            muted={isMute}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <div className="absolute bottom-10 flex items-center w-full justify-between  ">
            <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-white px-8 py-4 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7 text-black" />
              </button>
              <button className="modalButton">
                <BiPlus className="w-7 h-7" />
              </button>
              <button className="modalButton">
                <AiOutlineLike className="w-7 h-7" />
              </button>
              <button
                className="modalButton"
                onClick={() => {
                  setIsMute(!isMute);
                }}
              >
                {isMute ? (
                  <BsVolumeMute className="w-7 h-7" />
                ) : (
                  <BsVolumeDown className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm ">
              <p className="font-semibold text-green-400 ">
                {Math.round(currentMovie?.vote_average * 10)}% Match
              </p>
              <p className="font-light">{currentMovie.release_date}</p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>

            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">{currentMovie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div className="">
                  <span className="text-[gray]">Original language:</span>
                  {currentMovie?.original_language}
                </div>
                <div className="text-[gray] ">
                  <span>Total votes:</span>
                  {currentMovie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
