import React from 'react'
import {MyPokiLists} from '../../../packages/ui/interfaces'
import { useDispatch } from 'react-redux'
import { removePokiLists } from '../../../../../code-challenge/project/apps/app/src/redux/slice'


export const List = ({ pokeList }: any) => {
  const dispatch = useDispatch()

  return <div className="grid-item">{pokeList} <button onClick={() =>  dispatch(removePokiLists(pokeList))}>Remove</button></div>
}