import React from 'react'
import { Heroeslist } from '../componentes'

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />

      <Heroeslist publisher='Marvel Comics' />
    </>
  )
}
