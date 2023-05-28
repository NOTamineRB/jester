import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col  items-center w-full h-full">
      <div className="flex  mt-10 mb-10">
        <h2 className="text-blue-500 text-3xl ">Bien venu au service web</h2>
      </div>
      <div className="flex  mt-10">
        <h1 className="text-blue-800 text-5xl font-bold m-30">M-Files.</h1>
      </div>
    </div>
  );
};

export default Welcome;
