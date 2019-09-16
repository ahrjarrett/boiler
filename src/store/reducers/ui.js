const initialState = { focusedElement: null };

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case "TOGGLE_FOCUS":
      return { ...state, focusedElement: payload };
    default:
      return state;
    //throw new Error(
    //  `\nReducer error: No action with of type found :: ${type}`
    //);
  }
}
