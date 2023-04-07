import React, { useContext } from 'react'
import Cousin from '../Cousin/Cousin'
import { MoneyContext } from '../Grandpa/Grandpa'

const Uncle = () => {

  const [money,setMoney] = useContext(MoneyContext)

  return (
    <div className=''>
      <h2>Uncle</h2>
      <p><small>grandpa money: {money}</small></p>
      <button onClick={() => setMoney(money + 1000)}>send 1000tk</button>
      <Cousin>Nabil</Cousin>
      <Cousin>Nabila</Cousin>
    </div>
  )
}

export default Uncle