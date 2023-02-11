const calculateComplexMeridian = (
  rightAscension,
  observerLatitude,
  observerLongitude,
  observerLocalHourAngle
) => {
  /*
  In this function, rightAscension is the right ascension of a celestial body, observerLatitude is the latitude of the observer on the Earth, observerLongitude is the longitude of the observer on the Earth, and observerLocalHourAngle is the local hour angle of the observer. The function first checks if the values of rightAscension, observerLatitude, observerLongitude, and observerLocalHourAngle are within the acceptable range. If any of the values are not within the acceptable range, the function returns an error message. If all values are within the acceptable range, the function converts the observer's latitude and longitude to radians and calculates the astronomical meridian using a more complex formula that takes into account the observer's latitude, longitude, and local hour angle. The result is returned in radians.
  */

  if (
    isNaN(rightAscension) ||
    isNaN(observerLatitude) ||
    isNaN(observerLongitude || isNaN(observerLocalHourAngle))
  ) {
    return false;
  }
  if (
    rightAscension === "" ||
    observerLatitude === "" ||
    observerLongitude === "" ||
    observerLocalHourAngle === "" ||
    rightAscension === null ||
    observerLatitude === null ||
    observerLongitude === null ||
    observerLocalHourAngle === null
  ) {
    return false;
  }

  if (rightAscension <= 0) {
    return false;
  }
  if (observerLatitude <= -90 || observerLatitude >= 90) {
    return false;
  }
  if (observerLongitude <= -180 || observerLongitude >= 180) {
    return false;
  }
  if (observerLocalHourAngle <= -180 || observerLocalHourAngle >= 180) {
    return false;
  }
  rightAscension = Number(rightAscension);
  observerLatitude = Number(observerLatitude);
  observerLongitude = Number(observerLongitude);
  observerLocalHourAngle = Number(observerLocalHourAngle);
  let observerLatitudeInRadians = observerLatitude * (Math.PI / 180);
  let observerLongitudeInRadians = observerLongitude * (Math.PI / 180);
  let observerLocalHourAngleInRadians =
    observerLocalHourAngle * (Math.PI / 180);

  let astronomicalMeridian =
    rightAscension +
    observerLongitudeInRadians +
    Math.atan2(
      Math.sin(observerLocalHourAngleInRadians),
      Math.cos(observerLatitudeInRadians) *
        Math.tan(observerLatitudeInRadians) -
        Math.sin(observerLatitudeInRadians) *
          Math.cos(observerLocalHourAngleInRadians)
    );

  return astronomicalMeridian.toFixed(6);
};
export default calculateComplexMeridian;
