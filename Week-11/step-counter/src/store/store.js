import { createStore } from "redux";

const initialState = 0;

export function stepCountReducer(currentState = initialState, action) {
  switch (action.type) {
    case "ADD_STEP": {
      return currentState + 1;
    }
    case "RESET_STEP": {
      return 0;
    }
    default:
      return currentState;
  }
}

const store = createStore(stepCountReducer);

export { store };
