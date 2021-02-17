import React from "react";

const center = "calc(50% - 29px)";

const Loading = ({ loading }: { loading: boolean }) => {
  return (
    loading ? <div className="w-full h-full fixed block align-middle top-0 left-0 bg-white opacity-75 z-50">
    <span
      className="text-green-500 opacity-75 block relative w-0 h-0"
      style={{ top: center, left: center }}
    >
      <div className="w-12 h-12 border-4 border-teal-600 rounded-full loader"></div>
    </span>
  </div> : null
  );
};

export default Loading;
