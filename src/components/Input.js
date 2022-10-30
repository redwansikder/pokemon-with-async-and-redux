import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export function Input() {
  const search = useSelector((state) => state.search)
  const dispatch = useDispatch()

  return (
    <input
      placeholder='Enter Pokemon name:'
      value={search}
      onChange={(e) =>
        dispatch({ type: 'SET_FILTER', payload: e.target.value })
      }
    ></input>
  )
}
