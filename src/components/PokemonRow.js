import React from 'react'
import { useDispatch } from 'react-redux'

export function PokemonRow({ pokemon }) {
  const dispatch = useDispatch()
  return (
    <tr>
      <td
        onClick={() =>
          dispatch({ type: 'SET_SELECTED_POKEMON', payload: pokemon })
        }
      >
        {pokemon.name.english}
      </td>
    </tr>
  )
}
