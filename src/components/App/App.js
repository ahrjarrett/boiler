import React, { useEffect } from "react";

import { APP_NAME } from "config";
import { makeData } from "mockdata";
import * as S from "./styled";

export default function App() {
  const data = makeData([3, 1, 6, 2]);
  useEffect(() => {
    document.body.style.margin = 0;
  }, []);

  return <div>Boiler</div>;
}
