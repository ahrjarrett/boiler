import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { APP_NAME } from "config";
import * as S from "./styled";

let id = 8;
const makeId = () => id++;

const colNames = ["winnie", "bob", "thomas", "george"];

const dbColumns = {
  0: { name: "winnie", color: "#8E6E95", id: 0 },
  1: { name: "bob", color: "#39A59C", id: 1 },
  2: { name: "thomas", color: "#344759", id: 2 },
  3: { name: "george", color: "#E8741E", id: 3 }
};

const dbCards = {
  0: {
    id: 0,
    content: "0 bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "winnie"
  },
  1: {
    id: 1,
    content: "1 bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "winnie"
  },
  2: {
    id: 2,
    content: "2 bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "bob"
  },
  3: {
    id: 3,
    content: "3 bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "bob"
  },
  4: {
    id: 4,
    content: "4 bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "thomas"
  },
  5: {
    id: 5,
    content: "5 bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "thomas"
  },
  6: {
    id: 6,
    content: "6 bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "george"
  },
  7: {
    id: 7,
    content: "7 bbuy eggs buy eggs buy eggs buy eggs buy eggs uy eggs ",
    column: "george"
  }
};

function Card({ card, columnName, columnId, setCards }) {
  const handleMoveCard = (direction, column) => e => {
    const newIndex = columnId + (direction === "left" ? -1 : 1);
    const newColumnIndex =
      newIndex < 0 ? 4 + newIndex : newIndex > 3 ? newIndex - 4 : newIndex;

    setCards(cs => ({
      ...cs,
      [card.id]: { ...card, column: colNames[newColumnIndex] }
    }));
  };

  return (
    <div>
      <p style={{ display: "flex" }}>
        <span onClick={handleMoveCard("left", columnId)} className="arrow">
          ←
        </span>
        {card.content}
        <span onClick={handleMoveCard("right", columnId)} className="arrow">
          →
        </span>
      </p>
    </div>
  );
}

function Column({ cards, setCards, column }) {
  const { color, name } = column;

  const handleClick = e => {
    const content = window.prompt("enter new card");
    const id = makeId();
    const newCard = { id, content, column: column.name };

    setCards(prevCards => ({ ...prevCards, [id]: newCard }));
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
        {Object.keys(cards)
          .map(key => cards[key])
          .filter(card => card.column === name)
          .map(card => (
            <Card
              key={card.id}
              card={card}
              columnName={column.name}
              columnId={column.id}
              setCards={setCards}
            />
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

  useEffect(() => {
    const body = document.querySelector("body");
    window.body = body;
    body.style.margin = 0;
  }, []);

  useEffect(() => console.log(cards));

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
