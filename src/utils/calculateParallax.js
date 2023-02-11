const calculateParallax = (distance, apparentSize) => {
  if (isNaN(distance) || isNaN(apparentSize)) {
    return false;
  }
  if (
    distance === "" ||
    apparentSize === "" ||
    distance === null ||
    apparentSize === null
  ) {
    return false;
  }
  if (distance <= 0) {
    return false;
  }
  if (apparentSize <= 0) {
    return false;
  }
  distance = Number(distance);
  apparentSize = Number(apparentSize);
  let parallax = apparentSize - apparentSize / distance;
  return parallax.toFixed(6);
};
export default calculateParallax;
