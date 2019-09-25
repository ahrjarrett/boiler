import React, { useState, useEffect } from 'react'
import * as R from 'ramda'

import { APP_NAME } from 'config'
import { useData } from 'hooks'
import * as S from './styled'

const dataOptions = { quantity: { users: 4, accounts: 11, transactions: 80 } }

const scalars = ['String', 'Number', 'Function', 'Boolean', 'Null', 'Undefined', 'RegExp']
const isScalar = data => scalars.includes(R.type(data))

const mapIndexed = R.addIndex(R.map)

function renderData(data, key = null) {
  // TODO:
  return (
    <React.Fragment>
      {isScalar(data) && (
        <S.Scalar key={key} display={true}>
          {key && <S.Key>{key}:</S.Key>}
          <S.Value display={true}>{String(data)}</S.Value>
        </S.Scalar>
      )}
      {R.type(data) === 'Array' && (
        <S.List color={data.color || '#fff'}>
          <S.Key>{key}:</S.Key>
          <div>
            {mapIndexed(
              (entity, idx) => (
                <S.CollectionItem key={entity.id} hasKey={!!key} order={String(idx)}>
                  {renderData(entity, null)}
                </S.CollectionItem>
              ),
              data
            )}
          </div>
        </S.List>
      )}
      {R.type(data) === 'Object' && (
        <S.Hash color={data.color || '#fff'}>
          {R.map(key => renderData(data[key], key), R.keys(data))}
        </S.Hash>
      )}
    </React.Fragment>
  )
}

export default function App() {
  const [data, setData] = useState(() => null)
  const { entities } = useData(dataOptions)

  useEffect(() => {
    setData(entities)
    console.log(entities)
  }, data)

  return (
    <S.Outermost>
      <S.Container>
        <S.Title>{APP_NAME}</S.Title>
        <S.Recurse>{data && renderData(data)}</S.Recurse>
      </S.Container>
    </S.Outermost>
  )
}
