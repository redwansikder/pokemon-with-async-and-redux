import React from 'react'
import { useSelector } from 'react-redux'

export function SinglePokemon() {
  const selPoke = useSelector((state) => state.selPoke)

  return (
    <div className='SinglePokemon'>
      <h1>
        Name: {selPoke.name.english}, ID: {selPoke.id}
      </h1>
      <table>
        <tbody>
          {Object.keys(selPoke.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selPoke.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
