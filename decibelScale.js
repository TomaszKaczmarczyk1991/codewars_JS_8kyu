function dBScale(intensity) {
  const dB = 10*Math.log10(intensity/Math.pow(10, -12))
  return dB;
}