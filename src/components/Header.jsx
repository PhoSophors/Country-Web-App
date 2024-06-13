import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import React from "react";

const Header = () => {
  const handleAppRefresh = () => {
    window.location.reload();
  };

  return (
    <header
      className="flex justify-center items-center min-h-20  min-w-full backdrop-blur-sm bg-white/30 text-white"
      style={{ position: "sticky", top: "0", zIndex: "1000" }}
    >
      <div className="xl:w-10/12 md:w-full w-full flex justify-between mx-3">
        <div>
          <h1
            className="text-xl flex items-center mt-2 font-bold text-gray-800 cursor-pointer name-app"
            onClick={handleAppRefresh}
          >
            Countries of the World
          </h1>
        </div>
        <div className="flex flex-cols gap-2">
          <a
            className="flex items-center justify-center cursor-pointer bg-gray-800 h-10 w-10 rounded-full"
            href="https://github.com/PhoSophors/Country-Web-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined />
          </a>
          <a
            className="flex items-center justify-center cursor-pointer bg-blue-600 h-10 w-10 rounded-full"
            href="https://www.linkedin.com/in/pho-sophors/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
