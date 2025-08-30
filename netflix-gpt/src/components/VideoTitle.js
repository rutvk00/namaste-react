import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-12 z-10">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg max-w-2xl">
        {title}
      </h1>

      {/* Description */}
      <p className="py-6 text-lg md:text-xl text-gray-200 max-w-md line-clamp-3">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-300 transition">
          ⏵ Play
        </button>
        <button className="flex items-center gap-2 bg-gray-500/70 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-700 transition">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
