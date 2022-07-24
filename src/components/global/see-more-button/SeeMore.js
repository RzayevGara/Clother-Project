import ButtonIcon from '../../../assets/images/svg-icons/button-arrow.svg'
import {Link} from 'react-router-dom'

function SeeMore(props) {
  return (
    <Link  to={props.link?props.link:"/"} className='see-more-btn'>
        see more
        <img src={ButtonIcon} alt="icon"/>
    </Link>
  )
}

export default SeeMore