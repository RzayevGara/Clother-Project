import ExpertIcon from '../../../assets/images/svg-icons/expert.svg'
import ShippingIcon from '../../../assets/images/svg-icons/shipping.svg'
import ScissorsIcon from '../../../assets/images/svg-icons/scissors.svg'

function ShippingStep() {
  return (
    <div className='shipping-step'>
      <div className='shipping-step-container'>
        <ul>
          <li>
            <img src={ExpertIcon} alt="icon"/>
            <h4>Expert picks</h4>
            <p>Get outfit and styling suggestions that meet your price preferences.</p>
          </li>
          <li>
            <img src={ShippingIcon} alt="icon"/>
            <h4>Free shipping</h4>
            <p>Easy returns and exchanges on all orders, pre-paid labels included.</p>
          </li>
          <li>
            <img src={ScissorsIcon} alt="icon"/>
            <h4>No commitment</h4>
            <p>Shop when you want, how you want. No subscription required.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ShippingStep