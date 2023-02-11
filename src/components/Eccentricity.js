import React, { useState, useEffect } from "react";
import { calculateEccentricity } from "../utils/";

const Eccentricity = () => {
  const [eccentricity, setEccentricity] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [inputSemiMajor, setInputSemiMajor] = useState("");
  const [inputSemiMinor, setInputSemiMinor] = useState("");
  const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    if (submitted) {
      const eccen = calculateEccentricity(inputSemiMajor, inputSemiMinor);
      setEccentricity(eccen);
      setInputError(!eccen && eccen !== 0);
    }
  }, [submitted, inputSemiMajor, inputSemiMinor]);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const retry = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setInputError(false);
    setEccentricity(null);
    setInputSemiMajor("");
    setInputSemiMinor("");
  };

  return (
    <div className="card bg-base-100 shadow-xl w-auto">
      <div className="card-body">
        <h2 className="card-title">Eccentricity Calculator</h2>
        <p
          className="mt-10 hover:text-yellow-200 hover:cursor-pointer"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore
            ? `Enter the length of the semiMajorAxis and semiMinorAxis to calculate
          the eccentricity angle of an ellipse. Eccentricity is a measure of how
          much an orbit deviates from a perfect circle. In celestial mechanics,
          eccentricity is defined as the ratio of the distance between the focus
          and the center of an elliptical orbit and the semi-major axis of the
          same orbit.`
            : `Enter the length of the semiMajorAxis and semiMinorAxis to calculate
          the eccentricity angle of an ellipse.`}
        </p>

        {!submitted ? (
          <>
            <div className="card-actions mt-8">
              <div className="form-control">
                <form>
                  <label className="input-group mb-5">
                    <span>SemiMajor</span>
                    <input
                      onChange={(e) => setInputSemiMajor(e.target.value)}
                      value={inputSemiMajor}
                      placeholder=">= 0"
                      type="text"
                      className="input input-bordered"
                    />
                  </label>
                  <label className="input-group mb-5">
                    <span>SemiMinor</span>
                    <input
                      onChange={(e) => setInputSemiMinor(e.target.value)}
                      value={inputSemiMinor}
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
                    Eccentricity:{" "}
                    <span className="font-bold text-primary">
                      {eccentricity}&#176;
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

export default Eccentricity;
