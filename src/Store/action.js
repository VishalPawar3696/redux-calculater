import { COUNTER_DECREMENT, COUNTER_INCREMENT, ADD, SUBTRACT, MULTIPLY, DIVIDE } from "./action.types";

export const plus = () => ({type: COUNTER_INCREMENT});
export const minus = () => ({type: COUNTER_DECREMENT});


export const add = (X) => ({type: ADD, payload: X})
export const subtract = (X) => ({type: SUBTRACT, payload: X})
export const multiply = (X) => ({type: MULTIPLY, payload: X})
export const divide = (X) => ({type: DIVIDE, payload: X})