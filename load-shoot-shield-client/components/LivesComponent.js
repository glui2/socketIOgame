import React from "react";
import ReactDOM from "react-dom";
import HeartIcon from "@material-ui/icons/Favorite";

class LivesComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      livesRemaining: [1, 2, 3],
    };
  }

  render() {
    return this.state.livesRemaining.map(() => {
      <HeartIcon></HeartIcon>;
    });
  }
}

export default LivesComponent;
