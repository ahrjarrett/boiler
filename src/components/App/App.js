import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { APP_NAME } from "config";
import * as S from "./styled";

let id = 0;

const dbColumns = {
  winnie: { name: "winnie", color: "#8E6E95" },
  bob: { name: "bob", color: "#39A59C" },
  thomas: { name: "thomas", color: "#344759" },
  george: { name: "george", color: "#E8741E" }
};

const dbCards = [
  {
    id: id++,
    content: "bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "winnie"
  },
  {
    id: id++,
    content: "bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "winnie"
  },
  {
    id: id++,
    id: 3,
    content: "bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "bob"
  },
  {
    id: 4,
    id: id++,
    content: "bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "bob"
  },
  {
    id: 5,
    id: id++,
    content: "bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "thomas"
  },
  {
    id: 6,
    id: id++,
    content: "bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "thomas"
  },
  {
    id: 7,
    id: id++,
    content: "bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "george"
  },
  {
    id: 8,
    id: id++,
    content: "bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "george"
  }
];

function Card({ card, column }) {
  return (
    <div>
      <p>
        {card.content} <span className="arrow"> Arrow</span>
      </p>
    </div>
  );
}

function Column({ cards, setCards, column }) {
  const { color, name } = column;

  const handleClick = e => {
    const content = window.prompt("enter new card");
    const newCard = { id: id++, content, column: column.name };

    console.log("newCard", newCard);
    setCards(prevCards => [...prevCards, newCard]);
  };

  return (
    <div
      style={{
        marginLeft: 12.5,
        marginRight: 12.5
      }}
    >
      <div
        className="header"
        style={{
          background: color,
          margin: "10px auto",
          width: "25%"
        }}
      >
        <span>{name}</span>
      </div>
      <li>
        {cards
          .filter(card => card.column === name)
          .map(card => (
            <Card key={card.id} card={card} column={column} />
          ))}
      </li>
      <button onClick={handleClick}>+ Add a new card</button>
    </div>
  );
}

export default function App() {
  const [columns, setColumns] = useState(dbColumns);
  // TODO: Refactor to have each column manage own list of cards, so app doesn't re-render unnecessarily
  const [cards, setCards] = useState(dbCards);
  //const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const body = document.querySelector("body");
    window.body = body;
    body.style.margin = 0;
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw"
      }}
    >
      <div style={{ width: "100%", display: "flex", margin: 25 }}>
        <ul
          className="column"
          style={{
            display: "flex",
            padding: 0,
            listStyleType: "none"
          }}
        >
          {Object.keys(columns).map(key => {
            const column = columns[key];
            return (
              <Column
                key={column.name}
                cards={cards}
                setCards={setCards}
                column={column}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
