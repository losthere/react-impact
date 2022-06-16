import React from "react";
import { ReactDOM } from "react";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }
  render() {
    return (
      <button
        onClick={() => this.props.onClick(this.props.idx)}>
        {this.props.idx}
      </button>
    );
  }
}
