const Shimmer = () => {
  return (
    <div className="shimmer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card bg-gray-200 h-60 rounded-lg animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
