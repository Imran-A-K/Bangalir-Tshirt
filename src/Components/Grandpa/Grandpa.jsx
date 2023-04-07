import React from 'react'
import './Grandpa.css'
import Father from '../Father/Father' 
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'

const Grandpa = () => {
  return (
    <div className='grandpa'>
      <h2>Grandpa</h2>
      <section className='flex'>
        <Father></Father>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
    </div>
  )
}

export default Grandpa