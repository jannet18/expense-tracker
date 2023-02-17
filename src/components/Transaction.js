import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext);
  return (
    <div>
        <li className={transaction.amount < 0 ? 'minus' : 'plus' }>
            {/* math.abs solves double rendering */}
        {transaction.text}<span>{sign}Ksh{Math.abs(transaction.amount)}</span><button onClick={() =>deleteTransaction(transaction.id)} className='delete-btn'>x</button>
    </li>
    </div>
  )
}

export default Transaction;