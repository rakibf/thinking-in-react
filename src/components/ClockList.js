import Clock from "./Clock";

function ClockList({ numbers }) {
  return (
    <div>
     {
        numbers.map((number) => <Clock key={Math.random()} />)
     }
    </div>
  );
}

export default ClockList;
