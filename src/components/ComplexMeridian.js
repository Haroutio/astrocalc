import React, { useState, useEffect } from "react";
import { calculateComplexMeridian } from "../utils/";

const ComplexMeridian = () => {
  const [complexmeridian, setComplexMeridian] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [inputRightAscension, setInputRightAscension] = useState("");
  const [inputObserverLatitude, setInputObserverLatitude] = useState("");
  const [inputObserverLongitude, setInputObserverLongitude] = useState("");
  const [inputObserverLocalHourAngle, setInputObserverLocalHourAngle] =
    useState("");
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    if (submitted) {
      const merid = calculateComplexMeridian(
        inputRightAscension,
        inputObserverLatitude,
        inputObserverLongitude,
        inputObserverLocalHourAngle
      );
      setComplexMeridian(merid);
      setInputError(!merid && merid !== 0);
    }
  }, [
    submitted,
    inputRightAscension,
    inputObserverLatitude,
    inputObserverLongitude,
    inputObserverLocalHourAngle,
  ]);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const retry = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setInputError(false);
    setComplexMeridian(null);
    setInputRightAscension("");
    setInputObserverLatitude("");
    setInputObserverLongitude("");
    setInputObserverLocalHourAngle("");
  };

  return (
    <div className="card bg-base-100 shadow-xl w-auto">
      <div className="card-body">
        <h2 className="card-title">Complex Meridian Calculator</h2>
        <p
          className="mt-10 hover:text-yellow-200 hover:cursor-pointer"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore
            ? `This takes in Right Ascension and the Observers longitude, similar to
          the simple meridian calculator, however this also takes in the
          observers latitude, and the observers local hour angle. This makes for
          a much more accurate calculation. The meridian is defined as the great circle passing through the celestial poles and the zenith of an
          observer's location. It represents the line of longitude in the sky
          that is exactly overhead at any given moment for an observer on the
          Earth. The meridian is used in astronomy to calculate the positions of
          celestial bodies in the sky, and is an important concept in navigation
          and timekeeping.`
            : `This takes in Right Ascension and the Observers longitude, similar to
          the simple meridian calculator, however this also takes in the
          observers latitude, and the observers local hour angle. This makes for
          a much more accurate calculation.`}
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
                    <span>Latitude</span>
                    <input
                      onChange={(e) => setInputObserverLatitude(e.target.value)}
                      value={inputObserverLatitude}
                      placeholder="-90 to 90"
                      type="text"
                      className="input input-bordered"
                    />
                  </label>
                  <label className="input-group mb-5">
                    <span>Longitude</span>
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
                  <label className="input-group mb-5">
                    <span>Local Hour Angle</span>
                    <input
                      onChange={(e) =>
                        setInputObserverLocalHourAngle(e.target.value)
                      }
                      value={inputObserverLocalHourAngle}
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
                      {complexmeridian}&#176;
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

export default ComplexMeridian;
