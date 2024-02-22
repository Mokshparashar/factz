import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-12 w-full">
      <div className="border-4 border-solid border-t-4 border-t-white border-blue-500 rounded-full w-10 h-10 animate-spin m-auto mt-12"></div>
    </div>
  );
};

export default LoadingSpinner;
