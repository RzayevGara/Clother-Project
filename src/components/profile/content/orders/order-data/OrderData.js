import {ReactComponent as BoxIcon} from '../../../../../assets/images/svg-icons/box-icon.svg'

function OrderData(props){
    const ordersData = props.data
    return (
        <div className="order-lists">
            <ul>
                {
                    ordersData.map((order, index)=>(
                        <li key={index}>
                            <BoxIcon/>
                            <div className="order-info">
                                <p>Paid: {order.paid?<span className="paid-yes">Yes</span>:<span className="paid-no">No</span>}</p>
                                <p>Order date: <span>{order.created_at && order.created_at.slice(0, 10)}</span></p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default OrderData