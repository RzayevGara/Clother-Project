// import {ReactComponent as Xicon} from '../../../../../../assets/images/svg-icons/x-icon.svg'
// import {ReactComponent as HeartIcon} from '../../../../../../assets/images/svg-icons/heart-icon.svg'
import CardImage from '../../../../../../assets/images/picture/card-image.png'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


function ShopCard() {
  const userQuiz = useSelector((state) => state.quiz.userQuiz)

  return (
    <div className="shop-card">
      <div className="shop-card_container">
        <div className="shop-card_text">
          <h4>Bullseye</h4>
          <p>
            Tell us which clothes you like so that we can make an ever better
            assessment of your tastes.
          </p>
          <Link to={!userQuiz?'/quiz':'/quiz-result'}>Show now</Link>
        </div>
        <div className="shop-card_content">
            <img src={CardImage} alt="cardImage"/>
            {/* <div className="shop-card_buttons">	
              <button><Xicon/></button>
              <button><HeartIcon/></button>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
