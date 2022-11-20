import React from "react";

class CC extends React.Component {
  constructor(props) {
    super(props);
    // this.hours = 1;
    // this.minutes = ;
    // this.seconds = ;
    this.state = {
      hours: this.hours,
      minutes: this.hours / 60,
      seconds: this.minutes / 60,
    };
  }

  // handleButtonInc = () => {
  //   this.setState(
  //     (prevState) => {
  //       return {
  //         counter: prevState.counter + 1,
  //       };
  //     },
  //     () => {
  //       console.log(this.state.counter);
  //     }
  //   );
  // };

  // handleButtonDec = () => {
  //   this.setState(
  //     (prevState) => {
  //       return {
  //         counter: prevState.counter - 1,
  //       };
  //     },
  //     () => {
  //       console.log(this.state.counter);
  //     }
  //   );
  // };

  render() {
    //*Can run code here

    return (
      <>
        <input
          placeholder="Hours"
          onChange={({ target: { value } }) => {
            this.setState(
              (prevState) => {
                return {
                  hours: value,
                  minutes: this.state.hours / 60,
                  seconds: this.state.minutes / 60,
                };
              },
              () => {
                console.log(
                  `hr ${this.hours} min ${this.minutes} sec ${this.seconds}`
                );
              }
            );
          }}
        />
        <input placeholder="Minutes" />
        <input placeholder="Seconds" />

        <h3> hours : {this.state.hours}</h3>
        <h3>minutes : {this.state.hours / 60}</h3>
        <h3>seconds: {this.state.minutes / 60}</h3>
      </>
    );
  }
}

export default CC;
