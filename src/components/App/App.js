import React, { createContext } from "react";

import Form from "components/Form";
import { useFocus, useAppState } from "hooks";
import { DispatchContext } from "context";
import { APP_NAME } from "config";
import * as S from "./styled";

const initialState = { focused: false };

export default function App() {
  const { dispatch } = useAppState();

  return (
    <DispatchContext.Provider value={dispatch}>
      <S.Outermost>
        <S.Container>
          <S.Title>{APP_NAME}</S.Title>
          <Form />
        </S.Container>
      </S.Outermost>
    </DispatchContext.Provider>
  );
}
