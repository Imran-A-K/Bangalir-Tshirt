import React, { useContext } from 'react'
import { RingContext } from '../Grandpa/Grandpa'

const Special = ({ring}) => {
    const ringFromContextApi = useContext(RingContext)
  return (
    <div>
        <h2>Special</h2>
        <p><small>RIng: {ringFromContextApi}</small></p>
    </div>
  )
}

export default Special