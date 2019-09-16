import React from "react";

import Form from "components/Form";
import { APP_NAME } from "config";
import * as S from "./styled";

export default function App() {
  return (
    <S.Outermost>
      <S.Container>
        <S.Title>{APP_NAME}</S.Title>
        <Form autofocus={"focus_me"} />
      </S.Container>
    </S.Outermost>
  );
}
