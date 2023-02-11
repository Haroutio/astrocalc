import React, { useState, useEffect } from "react";
import { calculateDeclination } from "../utils/";

const Declination = () => {
  const [declination, setDeclination] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [inputTilt, setInputTilt] = useState("");
  const [inputLat, setInputLat] = useState("");
  const [inputLong, setInputLong] = useState("");
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    if (submitted) {
      const decl = calculateDeclination(inputTilt, inputLat, inputLong);
      setDeclination(decl);
      setInputError(!decl);
    }
  }, [submitted, inputTilt, inputLat, inputLong]);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const retry = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setInputError(false);
    setDeclination(null);
    setInputTilt("");
    setInputLat("");
    setInputLong("");
  };

  return (
    <div className="card bg-base-100 shadow-xl w-auto">
      <div className="card-body">
        <h2 className="card-title">Declination Calculator</h2>
        <p
          className="mt-10 hover:cursor-pointer hover:text-yellow-200"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore
            ? `Enter the tilt (epsilon), latitude, and longitude to calculate
          declination angle. Declination is the angle between the rays of the sun and the plane of
          the earth's equator. It can be calculated based on the tilt of the
          earth's axis, the latitude, and longitude of a location.`
            : `Enter the tilt (epsilon), latitude, and longitude to calculate
          declination angle.`}
        </p>
        {!submitted ? (
          <>
            <div className="card-actions mt-8">
              <div className="form-control">
                <form>
                  <label className="input-group mb-5">
                    <span>Tilt</span>
                    <input
                      onChange={(e) => setInputTilt(e.target.value)}
                      value={inputTilt}
                      placeholder="0 to 360"
                      type="text"
                      className="input input-bordered"
                    />
                  </label>
                  <label className="input-group mb-5">
                    <span>Latitude</span>
                    <input
                      onChange={(e) => setInputLat(e.target.value)}
                      value={inputLat}
                      placeholder="-90 to 90"
                      type="text"
                      className="input input-bordered"
                    />
                  </label>
                  <label className="input-group">
                    <span>Longitude</span>
                    <input
                      onChange={(e) => setInputLong(e.target.value)}
                      value={inputLong}
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
                    Declination:{" "}
                    <span className="font-bold text-primary">
                      {declination}&#176;
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

export default Declination;
