import faker from "faker";
import { keyBy } from "lodash/fp";

const cardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cardsById = {
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
  8: {},
  9: {},
  10: {}
};

const columnIds = [1, 2, 3, 4];
const columnsById = { 1: {}, 2: {}, 3: {}, 4: {} };
const cardsPer = [[1, 2, 3, 4], [5, 6], [7], [8, 9, 10]];

const cards = {
  allIds: cardIds,
  byId: Object.keys(cardsById)
    .map(key => keyBy(key.id))
    .forEach((keyed, index) => ({
      ...keyed,
      title: faker.name.findName(),
      cards: cardsPer[index]
    }))
};

const columns = {
  allIds: columnIds,
  byId: Object.keys(columnsById).map(item => ({
    ...item,
    text: faker.name.findName()
  }))
  //.map(key => keyBy(key.id)(item))
};

export const response = { cards, columns };

console.log(response);
