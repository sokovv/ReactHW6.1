import Clock from "./Clock";

export default function ClocksList(props) {

  return (
    <div className="clocksList">
        {props.clocks.map((item =>
          <Clock key={item.id} item={item} name={item.name} timeZone={item.timeZone} onDelete={props.onDelete}/>
        ))}
    </div>
  );
}
