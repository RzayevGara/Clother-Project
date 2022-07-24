import Card from './card/Card'
import Men from '../../../assets/images/picture/men-fashion.png'
import Women from '../../../assets/images/picture/women-fashion.png'

function StyleCard() {
  return (
    <div className='card-style'>
      <h2>Choose your style</h2>
      <div className='card-style-container'>
        <Card pic={Men} title={"Men`s fashion"}/>
        <Card pic={Women} title={"Women`s fashion"}/>
      </div>
    </div>
  )
}

export default StyleCard