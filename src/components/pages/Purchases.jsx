import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import getConfig  from '../../utils/getConfig' 
import PurchaseCard from '../purchases/PurchaseCard'
import './style/purchases.css'

const Purchases = () => {
  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div className='purchase'>
      <div className='purchase__header'>
        <NavLink to='/'>
          <span >Home</span>
        </NavLink>
        <span>Purchases</span>
      </div>

      <div className='purchase__title'>
        <span>My Purchases</span>
      </div>
      <div className='purchase__card'>
        {
          purchases?.map(purchase => (
            <PurchaseCard 
            key={purchase.id}
            purchase={purchase}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Purchases