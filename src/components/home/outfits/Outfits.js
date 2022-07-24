import React from 'react'
import Data from '../../../Data/outfitsData'
import OutfitsCard from './outfits-card/OutfitsCard'

function Outfits() {
    const outfitsData = Data
  return (
    <div className='outfits'>
        <div className='outfits-container'>
            <h2>Outfits</h2>
            <div className='outfits-list'>
                <ul>
                    {outfitsData.map((el,index)=>(
                        <OutfitsCard key={index} data={el}/>
                    ))}
                </ul>
            </div>
            <button>See more</button>
        </div>
    </div>
  )
}

export default Outfits