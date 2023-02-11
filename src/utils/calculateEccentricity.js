const calculateEccentricity = (semiMajorAxis, semiMinorAxis) => {
  let error = false;

  if (isNaN(semiMajorAxis) || isNaN(semiMinorAxis)) {
    error = true;
  }

  if (
    semiMajorAxis === "" ||
    semiMinorAxis === "" ||
    semiMajorAxis === null ||
    semiMinorAxis === null
  ) {
    error = true;
  }

  if (semiMajorAxis <= 0 || semiMinorAxis <= 0) {
    error = true;
  }

  if (error) {
    return false;
  }
  semiMinorAxis = Number(semiMinorAxis);
  semiMajorAxis = Number(semiMajorAxis);
  // Calculate astrological eccentricity of an ellipse
  let eccentricity = Math.sqrt(
    1 - (semiMinorAxis * semiMinorAxis) / (semiMajorAxis * semiMajorAxis)
  );

  if (isNaN(eccentricity)) {
    return false;
  }

  return eccentricity.toFixed(6);
};

export default calculateEccentricity;
