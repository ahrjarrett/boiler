import { useEffect, useRef } from 'react'
import * as R from 'ramda'

import * as utils from 'utils'

let count = 0

// CONFIG:
const defaultOptions = { quantity: { users: 3, accounts: 12, transactions: 90 } }
const metaProps = ['id', 'createdAt', 'updatedAt', 'index']
const dataProps = ['name', 'transactions', 'color', 'company', 'email', 'phone', 'username']
const makeProps = props => R.union(metaProps, props)

const nextEntity = list => list.filter((entity, index) => index === count++)[0]

const pluckEntityWithProps = props => R.project(makeProps(props))

const normalizeEntity = entity => R.objOf(entity.id, entity)
const normalizeEntities = R.map(normalizeEntity)

export function useData(options = defaultOptions, props = dataProps) {
  //const pluckEntities = pluckEntityWithProps(props)
  //const rawEntities = entitiesThroughN(quantity)
  //const entityList = pluckEntities(rawEntities)
  //const normalizedList = normalizeEntities(entityList)
  ////const entities = R.mergeAll(normalizedList)
  //const withTransactions = R.map(entity =>
  //  //utils.transactionsForEntity(entity, entity.accounts[0])
  //  utils.transactionsForEntity(entity, 1231312)
  //)
  //const withAccounts = R.map(entity => utils.accountsForEntity(entity))
  //const entities = R.mergeAll([
  //  ...normalizedList,
  //  ...R.map(withTransactions, normalizedList),
  //  ...R.map(withAccounts, normalizedList),
  //])

  const { quantity } = options

  const users = R.project([...metaProps, ...dataProps], utils.usersThroughN(quantity.users))
  const accounts = utils.accountsThroughN(users[0])(quantity.accounts)
  const transactions = utils.transactionsThroughN(accounts[0])(quantity.transactions)
  //const users = R.project([...metaProps, ...dataProps], utils.usersThroughN(quantity.users))
  //const nextUser = nextEntity(users)
  //const accounts = utils.accountsThroughN(nextUser())(quantity.accounts)
  //const nextAcct = nextEntity(accounts)
  //const transactions = utils.transactionsThroughN(nextAcct())(quantity.transactions)

  //console.log(accounts)

  const entities = {
    users,
    transactions,
    accounts,
  }
  console.log(entities)
  return entities
}
