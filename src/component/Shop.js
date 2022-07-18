import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { action } from '../state/indexStore'

function Shop() {
  const dispatch = useDispatch();
  const {withdrawGold, depositeGold}= bindActionCreators(action, dispatch);

  return (
    <div>
        <h3>DEPOSIT OR WITHDRAW GOLD ANYTIME</h3>
        <button className="btn btn-primary mx-2" onClick={() => {withdrawGold(1) }}>-</button>
        Debit/Credit
        <button className="btn btn-primary mx-2" onClick={() => {depositeGold(1) }}>+</button>
    </div>
  )
}

export default Shop;