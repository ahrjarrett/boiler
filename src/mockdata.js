import faker from "faker";

let colors = ["tomato", "violet", "turquoise", "palegreen"];

export function makeData(cardsPerColumn, columns = 4) {
  const data = Array(columns)
    .fill(undefined)
    .map((_, index) => ({
      index: index,
      header: faker.name.findName(),
      color: colors[index],
      cards: Array(cardsPerColumn[index])
        .fill(undefined)
        .map(() => faker.helpers.createCard())
    }));

  return data;
}
