import LikeDislike from '../../global/like-dislike-button/LikeDislike'
import { useDispatch, useSelector} from 'react-redux'
import {setLike, setLikeErrorMessage} from '../../../redux/reducer/QuizReducer'
import React, {useEffect} from 'react'

function ImageLike(props) {
  const dispatch = useDispatch()
  const questions = props.data;
  const errorMessage = useSelector((state) => state.quiz.likeErrorMessage)
  const questionIndex = useSelector((state) => state.quiz.index)

  const likeClick = ()=>{
    dispatch(setLike(true))
  }
  const dislikeClick = ()=>{
    dispatch(setLike(false))
  }

  useEffect(()=>{
    dispatch(setLikeErrorMessage(null))
  }, [questionIndex, dispatch])


  return (
    <div className="image-like">
      <p className="question-title">{questions.question_text}</p>
      <div className="image-like_container">
        <img className="question-image" src={questions.image_example} alt="questionsImage" />
        <LikeDislike like={likeClick} dislike={dislikeClick}/>
      </div>
        {errorMessage&&
        <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default ImageLike;
