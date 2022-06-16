import React from "react";
import { ReactDOM } from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: null,
      value2: null,
    };
  }

  myfunction =  (val) => {
    if (val == 1) this.setState({ value1: val });
    else this.setState({ value2: val });
  };

  render() {
    return (
      <div>
        <Square
          value={this.state.value1}
          idx={1}
          onClick={this.myfunction}
        ></Square>
        <br />
        <Square
          value={this.state.value2}
          idx={2}
          onClick={this.myfunction}
        ></Square>
      </div>
    );
  }
}
export default  Board;