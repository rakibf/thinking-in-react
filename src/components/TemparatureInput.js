const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
export default function TemparatureInput({
  temparature,
  handleTemparatureChange,
  scale,
}) {
  return (
    <fieldset>
      <legend>Enter temparature in {scaleNames[scale]}:</legend>
      <input
        type="text"
        value={temparature}
        onChange={(e) => handleTemparatureChange(e, scale)}
      />
    </fieldset>
  );
}
