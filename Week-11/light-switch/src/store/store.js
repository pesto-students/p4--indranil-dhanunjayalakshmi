import { createStore } from "redux";

const initialState = { isLightOn: true };

export function appReducer(currentState = initialState, action) {
  switch (action.type) {
    case "FLIP": {
      return { ...currentState, isLightOn: !currentState.isLightOn };
    }
    default:
      return currentState;
  }
}

const store = createStore(appReducer);

export { store };
