const calculateSimpleMeridian = (rightAscension, observerLongitude) => {
  /*
  In this function, rightAscension is the right ascension of a celestial body, and observerLongitude is the longitude of the observer on the Earth. The function first checks if the values of rightAscension and observerLongitude are within the acceptable range. If any of the values are not within the acceptable range, the function returns an error message. If all values are within the acceptable range, the function converts the observer's longitude to radians and calculates the astronomical meridian by simply adding the right ascension and the observer's longitude. The result is returned in radians.
  */
  if (isNaN(rightAscension) || isNaN(observerLongitude)) {
    return false;
  }
  if (
    rightAscension === "" ||
    observerLongitude === "" ||
    rightAscension === null ||
    observerLongitude === null ||
    rightAscension === undefined ||
    observerLongitude === undefined
  ) {
    return false;
  }
  if (rightAscension <= 0) {
    return false;
  }
  if (observerLongitude <= -180 || observerLongitude >= 180) {
    return false;
  }
  rightAscension = Number(rightAscension);
  observerLongitude = Number(observerLongitude);
  let observerLongitudeInRadians = observerLongitude * (Math.PI / 180);
  let astronomicalMeridian = rightAscension + observerLongitudeInRadians;
  return astronomicalMeridian.toFixed(6);
};
export default calculateSimpleMeridian;
