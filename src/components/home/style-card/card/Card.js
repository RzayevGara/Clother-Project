import SeeMoreBtn from '../../../global/see-more-button/SeeMore'

function Card(props) {
  return (
    <div className="home-card">
        <div className="home-card_linear"></div>
        <img className="home-card-pic" src={props.pic} alt="card"/>
        <div className="home-card-text">
            <p>{props.title}</p>
            <SeeMoreBtn/>
        </div>
    </div>
  )
}

export default Card