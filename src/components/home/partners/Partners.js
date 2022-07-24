import {PartnersFunction} from '../../../redux/reducer/PartnersReducer'
import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'

function Partners() {
    const dispatch = useDispatch()
    const partnersData = useSelector((state) =>state.partners.partnersLogo)

    useEffect(() => {
        dispatch(PartnersFunction())
    }, [dispatch])

  return (
    <div className='partners'>
        <div className='partners-container'>
            <h2>Our partners</h2>
            <ul>
                {partnersData &&
                    partnersData.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt="logo"/>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Partners