import React, { useContext } from "react";

import { DispatchContext } from "context";
import * as hooks from "hooks";

import * as S from "./styled";

const inputId = "focus_me";

export default function Form() {
  const dispatch = useContext(DispatchContext);

  const handleClick = e => {
    console.log("e:", e);
    console.log("\n\n\n\n\n");
    console.log("inside handleclick");

    e.preventDefault();
    return dispatch({ type: "TOGGLE_FOCUS" });
  };

  hooks.useAutofocus(inputId);

  return (
    <S.Form>
      <input id={inputId} placeholder="I focus" />
      <S.Button onClick={handleClick}>Click me to focus input</S.Button>
      <ShowIsFocused />
    </S.Form>
  );
}

function ShowIsFocused() {
  const { state } = hooks.useAppState();
  return <p>{String(state.focused)}</p>;
}
