import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex justify-center items-center min-h-9  min-w-full backdrop-blur-sm bg-white/30 text-white"
      style={{ position: "relative", bottom: "0" }}
    >
      <div className="xl:w-10/12 md:w-full w-full flex justify-center ">
        <h1 className="text-sm justify-center ">
          &copy;2024 PHO SOPHORS. All Rights Reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
