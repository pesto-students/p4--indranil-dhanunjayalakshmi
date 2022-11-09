import { connect } from "react-redux";

import "./App.css";

function App(props) {
  const { steps, dispatch } = props;
  return (
    <div className="App">
      <h1>You've walked {steps} steps today!</h1>
      <div className="step-buttons">
        <button
          className="add"
          onClick={() => {
            dispatch({ type: "ADD_STEP" });
          }}
        >
          Add a Step
        </button>
        <button
          className="reset"
          onClick={() => {
            dispatch({ type: "RESET_STEP" });
          }}
        >
          Reset Steps
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    steps: state,
  };
};

export default connect(mapStateToProps)(App);
