import React from 'react'
import {MyPokiLists} from '../../../packages/ui/interfaces'


export const List = ({ pokeList }: any) => {
  return <div className="grid-item">{pokeList}</div>
}