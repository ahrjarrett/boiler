const initialState = { pending: false };

export default function(state = initialState, { type }) {
  switch (type) {
    case "TOGGLE_FOCUS":
      return state;
    default:
      return state;
    //throw new Error(
    //  `\nReducer error: No action with of type found :: ${type}`
    //);
  }
}
