import React from "react";
const Navbar = () => {
  return (
    <div className="card bg-base-100 shadow-xl w-auto mt-10">
      <div className="card-body items-center">
        <h2 className="card-title">About AstroCalc</h2>
        <p className="mt-2">
          This is a basic application designed specifically with astrological
          calculations in mind. As vague and hard as it is to find astrological
          formulas (due to many of the calculators or formulas around being
          either too simple thus making the results inaccurate, or not very
          scientific) a client of mine asked me to build him a web application
          capable of doing such calculations. The formulas I use, as well as the
          very code for this web app are entirely free and open source
          (available through{" "}
          <a
            href="http://github.com/haroutio"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-200 hover:cursor-pointer hover:text-yellow-600"
          >
            GitHub
          </a>
          ).
        </p>
      </div>
    </div>
  );
};

export default Navbar;
