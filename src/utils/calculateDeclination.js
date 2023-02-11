const calculateDeclination = (tilt, lat, long) => {
  if (isNaN(long) || isNaN(lat) || isNaN(tilt)) {
    return false;
  }

  if (
    tilt === "" ||
    lat === "" ||
    long === "" ||
    tilt === null ||
    lat === null ||
    long === null
  ) {
    return false;
  }

  if (long < -180 || long > 180) {
    return false;
  }

  if (lat < -90 || lat > 90) {
    return false;
  }

  if (tilt < 0 || tilt > 360) {
    return false;
  }
  tilt = Number(tilt);
  lat = Number(lat);
  long = Number(long);
  // Calculate declination in radians and convert to degrees
  let answerInRadians = Math.asin(
    Math.cos(tilt) * Math.sin(lat) +
      Math.sin(tilt) * Math.cos(lat) * Math.sin(long)
  );

  let declination = (answerInRadians * 180) / Math.PI;

  if (isNaN(declination)) {
    return false;
  }

  return declination.toFixed(6);
};

export default calculateDeclination;
