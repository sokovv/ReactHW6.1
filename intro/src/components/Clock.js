import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }


  render() {

    const hour = this.state.date.getUTCHours()
    const sec = this.state.date.toLocaleTimeString(navigator.language, {
      second: "2-digit",
    });
    const min = this.state.date.toLocaleTimeString(navigator.language, {
      minute: "2-digit",
    });
    const hours = Number(hour);
    return (
      <> <div className="clock">
        <div className="control">
          <div className="name">{this.props.name}</div>
          <div className="close" onClick={this.props.onDelete(this.props.item.id)}></div>
        </div>
        <div className="hasy">

          <div
            className="sekundes"
            style={{ transform: `rotate(${sec * 6}deg)` }}
          ></div>
          <div
            className="minutes"
            style={{ transform: `rotate(${min * 6}deg)` }}
          ></div>
          <div
            className="has"
            style={{ transform: `rotate(${(hours + Number(this.props.timeZone)) * 30}deg)` }}
          ></div>
          <div className="sentr"></div>
        </div>
        </div>
      </>
    );
  }
}

export default Clock;
