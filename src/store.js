import { createStore } from "redux";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INCRE_MILLI":
      return {
        ...state,
        milliseconds: payload.milliseconds,
      };

    case "INCRE_SEC":
      return {
        ...state,
        seconds: payload.seconds,
      };

    case "INCRE_MIN":
      return {
        ...state,
        minutes: payload.minutes,
      };

    case "INCRE_HOUR":
      return {
        ...state,
        hours: payload.hours,
      };

    case "TOOGLE":
      return {
        ...state,
        load: !payload.load,
      };

    case "RESET":
      return {
        ...payload,
      };

    default:
      return state;
  }
};
const initialState = {
  milliseconds: 0,
  seconds: 0,
  minutes: 0,
  hours: 0,
  load: false,
};

const store = createStore(reducer, initialState);

export default store; 
