import React from "react";
import { VscGithub } from "react-icons/vsc";
import { GiStarSattelites } from "react-icons/gi";
const Navbar = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content">
      <div>
        <div className="grid grid-flow-col gap-10 text-5xl">
          <a
            href="https://www.github.com/haroutio"
            rel="noopener noreferrer"
            target="_blank"
            className="text-yellow-200 hover:text-yellow-600"
          >
            <VscGithub />
          </a>
          <a
            href="https://www.github.com/haroutio/astrocalc#readme"
            rel="noopener noreferrer"
            target="_blank"
            className="text-yellow-200 hover:text-yellow-600"
          >
            <GiStarSattelites />
          </a>
        </div>
      </div>
      <div>
        <p>
          Web Development by{" "}
          <a
            className="text-yellow-200 hover:text-yellow-600"
            href="https://www.harout.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            Harout.io
          </a>
        </p>
        <p>Copyright © AstroCalc {getYear()} - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Navbar;
