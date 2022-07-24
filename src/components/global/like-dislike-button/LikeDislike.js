import {ReactComponent as LikeIcon} from '../../../assets/images/svg-icons/likeIcon.svg'
import {ReactComponent as DislikeIcon} from '../../../assets/images/svg-icons/dislikeIcon.svg'
import {useSelector} from 'react-redux'

function LikeDislike(props){
  const like = useSelector((state) => state.quiz.like)
    return (
    <div className="like-dislike_buttons">
        <button className={like===true?"active-button":like===false?null:null} onClick={props.like?props.like:()=>props.function(1)}>
            <LikeIcon/>
        </button>
        <button className={like===false?"active-button":like===true?null:null} onClick={props.dislike?props.dislike:()=>props.function(0)}>
            <DislikeIcon/>
        </button>
    </div>
    )
}

export default LikeDislike