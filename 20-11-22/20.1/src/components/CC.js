import React from "react";

class CC extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.newAge = props.age;
  }

  //   state = { counter: 0, name: 'Bob' };

  handleButtonInc = () => {
    this.setState(
      (prevState) => {
        return {
          counter: prevState.counter + 1,
        };
      },
      () => {
        console.log(this.state.counter);
      }
    );
  };

  handleButtonDec = () => {
    this.setState(
      (prevState) => {
        return {
          counter: prevState.counter - 1,
        };
      },
      () => {
        console.log(this.state.counter);
      }
    );
  };

  render() {
    //*Can run code here
    console.log(this.newAge);
    return (
      <>
        <button onClick={this.handleButtonInc}>Inc</button>
        <button onClick={this.handleButtonDec}>Dec</button>
        <h3>{this.state.counter}</h3>
      </>
    );
  }
}

export default CC;
