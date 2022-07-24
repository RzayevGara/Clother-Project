import React from 'react'
import paymentsIcon from '../../../../assets/images/svg-icons/payments.svg'

const Payments = () => {
  return (
    <div className='payments'>
      <div className='payments-container'>
        <div className='img-container'>
          <img src={paymentsIcon} alt='orders' />
        </div>
        <h3>You don't have any<br /> payment method yet...</h3>
      </div>
    </div>
  )
}

export default Payments