import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {orderActions} from '../../../../redux/actions/OrderActions'
import { TailSpin } from "react-loading-icons";
import OrderEmpty from './order-empty/OrderEmpty'
import OrdersData from './order-data/OrderData'



const Orders = () => {
  const dispatch = useDispatch()
  const {MyOrderFunction} = orderActions
  const token = useSelector((state)=>state.auth.token)
  const orderMenuLoading = useSelector((state)=>state.order.orderMenuLoading)
  const orderData = useSelector((state)=>state.order.orderData)

  useEffect(()=>{
    dispatch(MyOrderFunction(token))
  }, [dispatch, MyOrderFunction, token])

  return (
    <div className='orders'>
      <div className='orders-container'>
      {
          orderMenuLoading &&
          <div className="order-menu-loading">
            <div className="order-menu-loading_container">
              <TailSpin stroke="#2C3244" className="loading"/>
              <p>Order loading</p>
            </div>
          </div>
      }
        {orderData && 
          orderData.length===0?
            <OrderEmpty/>
            : orderData &&
            <OrdersData data={orderData}/>
        }
      </div>
    </div>
  )
}

export default Orders