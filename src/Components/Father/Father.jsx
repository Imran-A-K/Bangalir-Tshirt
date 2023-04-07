import React from 'react'
import './Father.css'
import Myself from '../Myself/Myself'
import Sister from '../Sister/Sister'
import Brother from '../Brother/Brother'
const Father = () => {
  return (
    <div>
    <h2>Father</h2>
    <section className='flex'>
    <Myself></Myself>
    <Sister></Sister>
    <Brother></Brother>
    </section>
    </div>
  )
}

export default Father