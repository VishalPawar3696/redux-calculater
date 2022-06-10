import {
    COUNTER_DECREMENT,
    COUNTER_INCREMENT,
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE,
  } from "./action.types";
  
  export const reducer = (state, { type, payload }) => {
    switch (type) {
      case COUNTER_INCREMENT: {
        state.count++;
        return { ...state };
      }
      case COUNTER_DECREMENT: {
        state.count--;
        return { ...state };
      }
      case ADD: {
        state.count = state.count + payload;
        return { ...state };
      }
      case SUBTRACT: {
        state.count = state.count - payload;
        return { ...state };
      }
      case MULTIPLY: {
        state.count = state.count * payload;
        return { ...state };
      }
      case DIVIDE: {
        state.count = state.count / payload;
        console.log(state.count);
  
        if (state.count == Infinity || payload == 0) {
          alert("Error in division");
          state.count = 0
          return {...state}
        } else {
          return { ...state };
        }
      }
      default: {
        return { ...state };
      }
    }
  };