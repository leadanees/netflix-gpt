import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  const tarilerdata = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(id);
  return (
    <div className="">
      <iframe
        className="
        w-screen aspect-video"
        src={`https://www.youtube.com/embed/${tarilerdata?.key}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
