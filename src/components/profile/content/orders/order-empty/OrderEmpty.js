import ordersIcon from '../../../../../assets/images/svg-icons/shopping-cart.svg'

function OrderEmpty(){
    return (
        <div className="order-menu-empty">
            <div className="order-menu-container">
                <div className='img-container'>
                    <img src={ordersIcon} alt='orders'/>
                </div>
                <h3>You don't have any<br /> orders yet...</h3>
            </div>
        </div>
    )
}

export default OrderEmpty