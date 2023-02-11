import React, { useState, useEffect } from "react";
import { calculateSimpleMeridian } from "../utils/";

const SimpleMeridian = () => {
  const [simplemeridian, setSimpleMeridian] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [inputRightAscension, setInputRightAscension] = useState("");
  const [inputObserverLongitude, setInputObserverLongitude] = useState("");
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    if (submitted) {
      const merid = calculateSimpleMeridian(
        inputRightAscension,
        inputObserverLongitude
      );
      setSimpleMeridian(merid);
      setInputError(!merid && merid !== 0);
    }
  }, [submitted, inputRightAscension, inputObserverLongitude]);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const retry = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setInputError(false);
    setSimpleMeridian(null);
    setInputRightAscension("");
    setInputObserverLongitude("");
  };

  return (
    <div className="card bg-base-100 shadow-xl w-auto">
      <div className="card-body">
        <h2 className="card-title">Simple Meridian Calculator</h2>
        <p
          className="mt-10 hover:cursor-pointer hover:text-yellow-200"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore
            ? `This takes in Right Ascension and the Observers longitude to calculate
          meridian, which is the sum of the right ascension and the observer's
          longitude. This is an extremely simple formula, and the one mostly
          used within the Astrological community. Unfortunately, only using
          Right Ascension and Observers Longitude are not enough to accurately
          determine the meridian. That's where the next calculator comes in
          which is a lot more complicated. `
            : `This takes in Right Ascension and the Observers longitude to calculate
          meridian, which is the sum of the right ascension and the observer's
          longitude.`}
        </p>
        {!submitted ? (
          <>
            <div className="card-actions mt-8">
              <div className="form-control">
                <form>
                  <label className="input-group mb-5">
                    <span>Right Ascension</span>
                    <input
                      onChange={(e) => setInputRightAscension(e.target.value)}
                      value={inputRightAscension}
                      placeholder=">= 0"
                      type="text"
                      className="input input-bordered"
                    />
                  </label>
                  <label className="input-group mb-5">
                    <span>Observer Longitude</span>
                    <input
                      onChange={(e) =>
                        setInputObserverLongitude(e.target.value)
                      }
                      value={inputObserverLongitude}
                      placeholder="-180 to 180"
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
                    Simple Meridian:{" "}
                    <span className="font-bold text-primary">
                      {simplemeridian}&#176;
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

export default SimpleMeridian;
