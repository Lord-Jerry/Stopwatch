import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class CountDown extends Component {
  constructor(prop) {
    super(prop);
    this.milliseconds = 0;
      this.seconds = 0;
      this.minutes = 5;
      this.hours = 1;
      this.load = false;
      this.state = {

      };
  }

  updateMilliseconds() {
    if (this.load === true) {
      if (this.milliseconds > 0) {
        this.milliseconds--;
      }
      if (this.milliseconds === 0) {
        this.milliseconds = 10;
        this.updateSeconds();
      }

    }
  }

  updateSeconds() {
    if (this.seconds > 0) {
      this.seconds--;
    }
    if (this.seconds === 0) {
      this.seconds = 59;
      this.updateMinutes();
    }
  }

  updateMinutes() {
    this.minutes--;
    if (this.minutes === 0) {
      this.minutes = 59;
      this.updateHours();
    }
  }
  updateHours() {
    if (this.hours > 0) {
      this.hours--;
      this.milliseconds = 10;
      this.seconds = 59;
      this.minutes = 59;
    } else if ((this.hours === 0) && (this.minutes === 0) &&
      (this.seconds === 0) && (this.milliseconds === 0)) {
      this.load = false;
    }
  }

  display(prop) {
    if (prop < 10) return `0${prop}`;
    return prop;
  }
  update() {
    this.setState({
      milliseconds: this.milliseconds,
      seconds: this.seconds,
      minutes: this.minutes,
      hours: this.hours

    });
    this.updateMilliseconds();
  }

  toogle() {
    this.load === false ? this.load = true : this.load = false;
    this.beep();
  }
  componentWillMount() {
    this.timer = setInterval(() => this.update(), 93);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>
          {this.display(this.state.hours)}:
 		 {this.display(this.state.minutes)}:
 		 {this.display(this.state.seconds)}:
 		 {this.display(this.state.milliseconds)}
          <br />
          <button onClick={this.toogle.bind(this)}>
            {this.load === true ? 'PAUSE' : 'START'}
          </button>
        </h1>
        {[1, 2, 3, 4, 5, 6, 7].map(i => <li>{i}</li>)}
      </div>
    );
  }
}

