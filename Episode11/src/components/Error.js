import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">Oops!</h1>
      <h2 className="text-2xl text-gray-700 mb-2">Something went wrong!!</h2>
      <h3 className="text-lg text-gray-600">
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
