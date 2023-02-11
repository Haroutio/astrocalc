import React, { useState, useEffect } from "react";
import { calculateAscendant } from "../utils/";

const Ascendant = () => {
  const [ascendant, setAscendant] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [inputBirthday, setInputBirthday] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [inputLatitude, setInputLatitude] = useState("");
  const [inputLongitude, setInputLongitude] = useState("");
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    if (submitted) {
      calculateAscendant();
    }
  }, [submitted, inputTime]);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const retry = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setInputError(false);
    setAscendant(null);
  };

  return (
    <div className="card bg-base-100 shadow-xl w-auto">
      <div className="card-body">
        <h2 className="card-title">Ascendant Calculator</h2>
        <p
          className="mt-10 hover:text-yellow-200 hover:cursor-pointer"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore
            ? `This one gets a little bit more complicated. Enter birthday, birth time, longitude, and latitude to calculate the Ascendant (Rising Sun). The Ascendant, also known as the Rising Sign, is the sign that was rising on the Eastern horizon at the time of birth and is considered to be the mask or public face that a person presents to the world. It requires a lot more calculation than is shown on the surface. Birthday is converted to Julian Date, Obliquity of the Ecliptic is calculated using that julian date as well as Sidereal Time, then both obliquity and siderealtime are used to calculate the Ascendant.`
            : `This one gets a little bit more complicated. Enter birthday, birth time, longitude, and latitude to calculate the Ascendant (Rising Sun).`}
        </p>
        {!submitted ? (
          <>
            <div className="card-actions mt-8">
              <div className="form-control">
                <form>
                  <label className="input-group mb-5">
                    <span>Birthday</span>
                    <input
                      onChange={(e) => setInputBirthday(e.target.value)}
                      value={inputBirthday}
                      type="date"
                      className="input input-bordered"
                    />
                  </label>
                  <label className="input-group mb-5">
                    <span>Birth Time</span>
                    <input
                      onChange={(e) => setInputTime(e.target.value)}
                      value={inputTime}
                      type="time"
                      className="input input-bordered"
                    />
                  </label>
                  <label className="input-group mb-5">
                    <span>Latitude</span>
                    <input
                      onChange={(e) => setInputLatitude(e.target.value)}
                      value={inputLatitude}
                      placeholder="-90 to 90"
                      type="text"
                      className="input input-bordered"
                    />
                  </label>
                  <label className="input-group mb-5">
                    <span>Longitude</span>
                    <input
                      onChange={(e) => setInputLongitude(e.target.value)}
                      value={inputLongitude}
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
                      {ascendant}&#176;
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

export default Ascendant;
