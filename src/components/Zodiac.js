import { useState, useEffect } from "react";
import { calculateZodiac } from "../utils/";

const Zodiac = () => {
  const [westernSign, setWesternSign] = useState();
  const [chineseSign, setChineseSign] = useState();

  const [dateError, setDateError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [inputBirthday, setInputBirthday] = useState("");

  useEffect(() => {
    if (submitted) {
      let correctedDay = new Date(inputBirthday);
      correctedDay = new Date(
        correctedDay.getTime() - correctedDay.getTimezoneOffset() * -60000
      );
      let calculatedZodiac = calculateZodiac(correctedDay);
      if (calculatedZodiac.dateError) {
        setDateError(true);
      } else {
        setWesternSign(calculatedZodiac.westernSign);
        setChineseSign(calculatedZodiac.chineseSign);
      }
    }
  }, [submitted, inputBirthday]);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const retry = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setDateError(false);
    setWesternSign("");
    setChineseSign("");
    setInputBirthday("");
  };

  return (
    <div className="card bg-base-100 shadow-xl w-auto justify-start">
      <div className="card-body">
        <h2 className="card-title">Zodiac Calculator</h2>
        <p
          className="mt-10 hover:cursor-pointer hover:text-yellow-200"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore
            ? `Enter your birthdate to calculate your western and chinese zodiac
          sign. In Western Astrology, a sign of the zodiac refers to one of 12
          specific constellations of the zodiac that the sun passes through. In
          Chinese Astrology, the zodiac is a traditional classification scheme
          based on the Chinese calendar that assigns an animal and its reputed
          attributes to each year in a repeating twelve-year cycle.`
            : `Enter your birthdate to calculate your western and chinese zodiac
          sign.`}
        </p>
        {!submitted ? (
          <>
            <div className="card-actions mt-8 ">
              <div className="form-control">
                <form>
                  <label className="input-group">
                    <span>Birthday</span>
                    <input
                      onChange={(e) => setInputBirthday(e.target.value)}
                      value={inputBirthday}
                      type="date"
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
              {!dateError ? (
                <>
                  <h1 className="text-xl">
                    Western Zodiac:{" "}
                    <span className="font-bold text-primary">
                      {westernSign}
                    </span>
                  </h1>
                  <h1 className="text-xl">
                    Chinese Zodiac:{" "}
                    <span className="font-bold text-primary">
                      {chineseSign}
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

export default Zodiac;
