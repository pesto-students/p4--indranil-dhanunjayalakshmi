import React from "react";
import { connect } from "react-redux";
import "./index.css";

const mapStateToProps = (state) => {
  return {
    isLightOn: state.isLightOn,
  };
};

const mapDispatchToProps = {
  flipLight() {
    return {
      type: "FLIP",
    };
  },
};

class App extends React.Component {
  render() {
    const lightedness = this.props.isLightOn ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        <h1>The room is {lightedness}</h1>
        <br />
        <button onClick={this.props.flipLight}>Flip</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
