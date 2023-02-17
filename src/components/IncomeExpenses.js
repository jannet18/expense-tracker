import React from 'react'

const IncomeExpenses = () => {
  return (
    <>
    <div className='inc-exp-container'>

        <h4>Income</h4>
        <p className='money plus'>+Ksh 0.00</p>
    </div>
    <div>
        <h4>Expense</h4>
        <p className='money minus'>-Ksh 0.00</p>
        </div>
    </>

  )
}

export default IncomeExpenses;