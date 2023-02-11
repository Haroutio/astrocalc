const calculateAscendant = (birthDate, birthTime, latitude, longitude) => {
  // Check input parameters
  if (
    !birthDate ||
    !(birthDate instanceof Date) ||
    isNaN(birthDate.getTime())
  ) {
    return false;
  }

  if (
    !birthTime ||
    !(birthTime instanceof Date) ||
    isNaN(birthTime.getTime())
  ) {
    return false;
  }

  if (!longitude || typeof longitude !== "number" || isNaN(longitude)) {
    return false;
  }

  if (!latitude || typeof latitude !== "number" || isNaN(latitude)) {
    return false;
  }

  // Helper function to calculate Julian date
  const julian = (year, month, day, hour, minute) => {
    if (month <= 2) {
      year -= 1;
      month += 12;
    }
    const A = Math.floor(year / 100);
    const B = 2 - A + Math.floor(A / 4);
    const JD =
      Math.floor(365.25 * (year + 4716)) +
      Math.floor(30.6001 * (month + 1)) +
      day +
      B -
      1524.5 +
      (hour + minute / 60) / 24;
    return JD;
  };

  // Helper function to calculate obliquity of the ecliptic
  const obliquityOfEcliptic = (julianDate) => {
    const T = (julianDate - 2451545) / 36525;
    const Eps = 23.4392917 - 0.0130041667 * T - 1.6666666667e-7 * T * T * T;
    return Eps;
  };

  // Helper function to calculate sidereal time at Greenwich
  const siderealTimeAtGreenwich = (julianDate) => {
    const T = (julianDate - 2451545) / 36525;
    const T0 = 6.697374558 + 2400.051336 * T + 0.000025862 * T * T;
    const T0Normalized = T0 % 24;
    const UT = (julianDate + 0.5) % 1;
    const GST = T0Normalized + UT * 24;
    return GST;
  };

  // Helper function to calculate Ascendant from sidereal time
  const calculateAscendantFromSiderealTime = (
    obliquity,
    siderealTime,
    latitude
  ) => {
    const tanA =
      (Math.sin((obliquity * Math.PI) / 180) *
        Math.tan((latitude * Math.PI) / 180)) /
      Math.cos((siderealTime * 15 * Math.PI) / 180);
    const ascendant = Math.atan(tanA);
    return (ascendant * 180) / Math.PI;
  };

  // Convert input parameters
  const year = birthDate.getFullYear();
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  const hour = birthTime.getHours();
  const minute = birthTime.getMinutes();

  /*
  // Convert longitude to decimal degrees
  const longDeg = Math.floor(longitude);
  const longMin = (longitude - longDeg) * 60;
  const longDec = longDeg + longMin / 60;
  */

  // Convert latitude to decimal degrees
  const latDeg = Math.floor(latitude);
  const latMin = (latitude - latDeg) * 60;
  const latDec = latDeg + latMin / 60;

  // Calculate Julian date
  const julianDate = julian(year, month, day, hour, minute);

  // Calculate obliquity of the ecliptic
  const obliquity = obliquityOfEcliptic(julianDate);

  // Calculate sidereal time at Greenwich
  const siderealTime = siderealTimeAtGreenwich(julianDate);

  // Calculate Ascendant from sidereal time
  const ascendant = calculateAscendantFromSiderealTime(
    obliquity,
    siderealTime,
    latDec
  );

  // Return the Ascendant in degrees
  return ascendant;
};

export default calculateAscendant;
