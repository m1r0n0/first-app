import React, { Component } from "react";

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
    };

    this.handeClick = this.handeClick.bind(this);
  }

  handeClick() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <h1> Now you see me</h1>
          <button onClick={this.handeClick}> Click</button>
        </div>
      );
    } 
    else {
      return (
        <div>
          <button onClick={this.handeClick}> Click</button>
        </div>
      )
    }
  }
}
