import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
        title="Movie Trailer"
        allow="autoplay; encrypted-media; picture-in-picture"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
    </div>
  );
};

export default VideoBackground;
