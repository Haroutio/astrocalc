const calculateInclination = (tilt, lat, long) => {
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
  // Calculate orbital inclination in radians and convert to degrees
  let inclination =
    (Math.atan2(Math.sin(long) * Math.cos(lat), Math.cos(tilt)) * 180) /
    Math.PI;

  if (isNaN(inclination)) {
    return false;
  }

  return inclination.toFixed(6);
};

export default calculateInclination;
