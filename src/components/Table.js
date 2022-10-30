import React from 'react'
import { PokemonRow } from './PokemonRow'
import { useSelector } from 'react-redux'

export function Table() {
  const pokemon = useSelector((state) => state.pokemon)
  const search = useSelector((state) => state.search)
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter((poke) =>
            poke.name.english.toLowerCase().includes(search.toLowerCase())
          )
          .slice(0, 15)
          .map((pokemon) => {
            return <PokemonRow key={pokemon.id} pokemon={pokemon} />
          })}
      </tbody>
    </table>
  )
}
