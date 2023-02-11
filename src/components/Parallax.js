import React, { useState, useEffect } from "react";
import { calculateParallax } from "../utils";

const Parallax = () => {
  const [parallax, setParallax] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [inputDistance, setInputDistance] = useState("");
  const [inputApparentSize, setInputApparentSize] = useState("");
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    if (submitted) {
      const paral = calculateParallax(inputDistance, inputApparentSize);
      setParallax(paral);
      setInputError(!paral && paral !== 0);
    }
  }, [submitted, inputDistance, inputApparentSize]);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const retry = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setInputError(false);
    setParallax(null);
    setInputDistance("");
    setInputApparentSize("");
  };

  return (
    <div className="card bg-base-100 shadow-xl w-auto">
      <div className="card-body">
        <h2 className="card-title">Parallax Calculator</h2>
        <p
          className="mt-10 hover:cursor-pointer hover:text-yellow-200"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore
            ? `Enter the distance from the Earth to the Moon and the apparent size of
          the Moon as seen from Earth to calculate parallax. Lunar parallax
          is the difference between the apparent size of the Moon and its
          actual size as a result of its distance from the Earth`
            : `Enter the distance from the Earth to the Moon and the apparent size of
          the Moon as seen from Earth to calculate parallax.`}
        </p>
        {!submitted ? (
          <>
            <div className="card-actions mt-8">
              <div className="form-control">
                <form>
                  <label className="input-group mb-5">
                    <span>Distance</span>
                    <input
                      onChange={(e) => setInputDistance(e.target.value)}
                      value={inputDistance}
                      placeholder=">= 0"
                      type="text"
                      className="input input-bordered"
                    />
                  </label>
                  <label className="input-group mb-5">
                    <span>Apparent Size</span>
                    <input
                      onChange={(e) => setInputApparentSize(e.target.value)}
                      value={inputApparentSize}
                      placeholder=">= 0"
                      type="text"
                      className="input input-bordered"
                    />
                  </label>
                  <button className="btn mt-10" onClick={submit}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-8">
              {!inputError ? (
                <>
                  <h1 className="text-xl">
                    Parallax:{" "}
                    <span className="font-bold text-primary">
                      {parallax}&#176;
                    </span>
                  </h1>
                </>
              ) : (
                <>
                  <h1 className="text-red-500 text-xl">
                    Input Error! Click below to try again...
                  </h1>
                </>
              )}
            </div>
            <button className="btn mt-10 left-0" onClick={retry}>
              Retry
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Parallax;
