export function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function toCelsius(fahreheit) {
  return ((fahreheit - 32) * 5) / 9;
}

export function convert(temparature, convertTo) {
  const input = parseFloat(temparature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convertTo(input);
  return Math.round(output * 1000) / 1000;
}