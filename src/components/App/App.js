import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import Trello from "components/Trello";
import { APP_NAME } from "config";
import { makeData } from "mockdata";
import * as S from "./styled";

export default function App() {
  const data = makeData([3, 1, 6, 2]);
  useEffect(() => {
    document.body.style.margin = 0;
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <S.Outermost>
        <S.Container>
          <S.Title>{APP_NAME}</S.Title>
          <Trello data={data} />
        </S.Container>
      </S.Outermost>
    </DndProvider>
  );
}
