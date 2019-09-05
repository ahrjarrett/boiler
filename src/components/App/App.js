import React from "react";
import styled from "styled-components/macro";
import * as S from "styled";

export default function App() {
  return (
    <S.Outermost>
      <S.Container>
        <S.Title>Boiler</S.Title>

        <S.Form>
          <input placeholder="I focus" />
          <S.Button>Click me to focus input</S.Button>
        </S.Form>
      </S.Container>
    </S.Outermost>
  );
}
