import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as hooks from "hooks";
import * as S from "./styled";

export default function Form({ autofocus }) {
  const dispatch = useDispatch();
  const { focusedElement } = useSelector(state => state.ui);

  hooks.useAutofocusFromStore();

  const handleClick = e => {
    e.preventDefault();
    return dispatch({ type: "TOGGLE_FOCUS", payload: autofocus });
  };

  useEffect(() => {
    dispatch({ type: "TOGGLE_FOCUS", payload: autofocus });
  }, [dispatch]);

  return (
    <S.Form>
      <input id={autofocus} placeholder="I focus" />
      <S.Button onClick={handleClick}>Click me to focus input</S.Button>
    </S.Form>
  );
}
