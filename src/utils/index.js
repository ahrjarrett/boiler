import { v4 } from 'uuid'
import faker, { finance } from 'faker'
import * as R from 'ramda'

export { invertColor } from './dom'

export const generateDateTime = () => new Date().toISOString()
export const generateUuid = () => v4()
export const factoryFn = faker.helpers.createCard
export const colorFn = faker.internet.color

// MUTATIONS:
const _metadataGenerator = (
  idFn = generateUuid,
  timestampFn = generateDateTime,
  colorFn = colorFn
) =>
  R.mergeRight({
    id: idFn(),
    createdAt: timestampFn(),
    updatedAt: timestampFn(),
    color: colorFn(),
  })

const createMetadata = n => metadataGenerator()({ index: n })
const createEntity = (factory, index) => R.mergeRight(createMetadata(index), factory(index))

const makeEntitiesThroughN = R.curry((factory, n, index) =>
  index >= n ? false : [createEntity(factory, index), index + 1]
)

const entitiesThroughN = factory => n => R.unfold(makeEntitiesThroughN(factory, n), 0)

const createUser = index => createEntity(faker.helpers.createCard, index)
const createTransaction = account => () => ({
  ...faker.helpers.createTransaction,
  account,
})
const createAccount = user => () => ({
  accountName: finance.accountName(),
  balance: finance.amount(),
  user,
})

const createTransactionForAccount = account => index =>
  createEntity(createTransaction(account.id), index)
const createAccountForUser = user => index => createEntity(createAccount(user.id), index)

export function metadataGenerator() {
  return _metadataGenerator(v4, generateDateTime, colorFn)
}

export const usersThroughN = entitiesThroughN(createUser)
export const transactionsThroughN = account =>
  entitiesThroughN(createTransactionForAccount(account))
export const accountsThroughN = user => entitiesThroughN(createAccountForUser(user))
