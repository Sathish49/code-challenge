import { List } from '../../../packages/ui'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MyPokiLists} from '../../../packages/ui/interfaces'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"



const App = () => {
  const [pokeLists, setPokiLists] = useState<MyPokiLists[]>([])

  // 1)How did you manage to fetch the list and what tool did you use?
  // Ans: I have user Third party library called axios to fetch pokelists from API

  // 2) What steps would you take to future improve this?
  // Ans: Will create commmon component to fetch api responses and also will create interceptor for axios
   


  useEffect(() => {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then(res => {
        setPokiLists(res.data.results)
      })
  },[])

  return (
    <>
     <h1>Pokemon list:</h1>
     {
      pokeLists && pokeLists.length > 0 && pokeLists.map((list):any => {
        <List pokeList={list}/>
      })
     }
    </>
  )
}

export default App
