import React from 'react'
import Cousin from '../Cousin/Cousin'

const Aunty = ({ring}) => {
  return (
    <div>
      <h2> Aunty</h2>
      <section>
        <Cousin>Abir</Cousin>
        <Cousin hasFriend={true} ring={ring}>Nibir</Cousin>
      </section>
      </div>
  )
}

export default Aunty