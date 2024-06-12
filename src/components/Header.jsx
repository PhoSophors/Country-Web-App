import React from "react";

const Header = () => {
  return (
    <header
      className="flex justify-center items-center min-h-20  min-w-full backdrop-blur-sm bg-white/30 text-white"
      style={{ position: "sticky", top: "0", zIndex: "1000" }}
    >
      <div className="xl:w-10/12 md:w-full w-full">
        <h1 className="text-2xl font-bold text-gray-800 cursor-pointer name-app">
          Countries of the World
        </h1>
      </div>
    </header>
  );
};

export default Header;
