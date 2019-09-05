import React, { useCallback, useEffect, useReducer, useRef } from "react";
import { isEmpty, isEqual } from "lodash";

export function useAutofocus(inputId) {
  const inputRef = useRef();
  const handleClick = e => e.preventDefault();

  useEffect(() => {
    inputRef.current = document.getElementById(inputId);
  }, [inputId]);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return handleClick;
}

export function useAppState() {
  const [state, dispatch] = useReducer(
    function(state, { type }) {
      switch (type) {
        case "TOGGLE_FOCUS":
          return { ...state, focused: !state.focused };
        default:
          throw new Error(`Reducer error: no action with type found:`);
      }
    },
    { focused: false },
    x => x,
    "id"
  );

  return { state, dispatch };
}
