import React from 'react'
import './App.css'
import { SinglePokemon } from './components/SinglePokemon'
import { Input } from './components/Input'
import { Table } from './components/Table'
import { pokemonReducer } from './pokemonReducer'
import { createStore } from 'redux'
import { Provider, useDispatch, useSelector } from 'react-redux'

const store = createStore(pokemonReducer)

function App() {
  const dispatch = useDispatch()
  const selPoke = useSelector((state) => state.selPoke)

  React.useEffect(() => {
    fetch('http://localhost:3000/pokemon.json')
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: 'SET_POKEMON',
          payload: data,
        })
      )
  }, [])

  return (
    <div className='App'>
      <h1>Pokemon API frontend.</h1>
      <Input />
      <div className='grid'>
        <Table />
        <div>
          {selPoke ? (
            <SinglePokemon />
          ) : (
            <h1 style={{ textAlign: 'left' }}>Click a Pokemon's name.</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
