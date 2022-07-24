import LikeDislike from '../../../global/like-dislike-button/LikeDislike'
import ShuffleData from '../../../../Data/shuffleData'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Home (){
    const data = ShuffleData
    const userQuiz = useSelector((state) => state.quiz.userQuiz)
    const [index, setIndex] = useState(1)
    const [active, setActive] = useState(false)
    const [like, setLike] = useState()

    const shuffleImages = (likeStatus)=>{
        likeStatus==0?setLike(false):setLike(true)
        setActive(true)
        setTimeout(()=>{
            setIndex(index+1)
            setTimeout(()=>{
                setActive(false)
            })
        },400)
    }
    return (
        <div className="profile-home">
            <div className="profile-home_container">
                {data[index] ?
                <div className="shuffle-area">
                    <div className={active?like==0?"dislike-active":"like-active":"shuffle-image"}>
                        <img src={data[index].img} alt="tshirts"/>
                    </div>
                    <LikeDislike function={shuffleImages}/>
                </div>
                : <div className="take-quiz">
                    <p>Great picks so far. Ready for the next step?</p>
                    <Link to={!userQuiz?'/quiz':'/quiz-result'}>Take your style quiz</Link>
                </div>
                }
            </div>
        </div>
    )
}

export default Home