import React, { useContext } from 'react'
import { RingContext } from '../Grandpa/Grandpa'

const Brother = () => {
  const ringFromContext = useContext(RingContext)

  return (
    <div>
      <h2>
      Brother
      </h2>
      <p><small>{ringFromContext}</small></p>
      </div>
  )
}

export default Brother