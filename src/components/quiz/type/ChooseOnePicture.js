import React, {useRef, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {setSelectedImage, setSelectedImageErrorMessage} from '../../../redux/reducer/QuizReducer'
import {ReactComponent as SuccessIcon} from '../../../assets/images/svg-icons/success-icon.svg'


function ChooseOnePicture(props) {
  const dispatch = useDispatch();
  const questions = props.data;
  const ref = useRef([])

  
  const chooseOne =(clickIndex)=>{
    ref.current.forEach((el, index)=>{
      if(clickIndex===index){
        el.classList.add('active-image')
        dispatch(setSelectedImage(el.childNodes[0].alt))
      }else{
        el.classList.remove('active-image')
      }
    })
  }
  const errorMessage = useSelector((state) => state.quiz.selectedImageErrorMessage)
  const questionIndex = useSelector((state) => state.quiz.index)

  
  useEffect(()=>{
    dispatch(setSelectedImageErrorMessage(null))
    ref.current.forEach((el)=>{
      if(el){
        el.classList.remove('active-image')
      }
    })
  }, [questionIndex, dispatch])

  
  return (
    <div className="choose-one-picture">
    <p className="question-title">{questions.question_text}</p>
    <div className="choose-one-picture_container">
      {
        questions.answer_img_1 &&
        <div ref={(element) => {ref.current[0] = element}} onClick={()=>chooseOne(0)}>
          <img src={questions.answer_img_1.image} alt={questions.answer_img_1.name}/>
          <SuccessIcon/>
        </div>
      }
      {
        questions.answer_img_2 &&
        <div ref={(element) => {ref.current[1] = element}} onClick={()=>chooseOne(1)}>
          <img src={questions.answer_img_2.image} alt={questions.answer_img_2.name}/>
          <SuccessIcon/>
      </div>
      }
      {
        questions.answer_img_3 &&
        <div ref={(element) => {ref.current[2] = element}} onClick={()=>chooseOne(2)}>
          <img src={questions.answer_img_3.image} alt={questions.answer_img_3.name}/>
          <SuccessIcon/>
      </div>
      }
      {
        questions.answer_img_4 &&
        <div ref={(element) => {ref.current[3] = element}} onClick={()=>chooseOne(3)}>
          <img src={questions.answer_img_4.image} alt={questions.answer_img_4.name}/>
          <SuccessIcon/>
      </div>
      }
      {
        questions.answer_img_5 &&
        <div ref={(element) => {ref.current[4] = element}} onClick={()=>chooseOne(4)}>
          <img src={questions.answer_img_5.image} alt={questions.answer_img_5.name}/>
          <SuccessIcon/>
      </div>
      }
      {
        questions.answer_img_6 &&
        <div ref={(element) => {ref.current[5] = element}} onClick={()=>chooseOne(5)}>
          <img src={questions.answer_img_6.image} alt={questions.answer_img_6.name}/>
          <SuccessIcon/>
      </div>
      }
    </div>
    {errorMessage &&
    <p className="error-message">{errorMessage}</p>
    }
  </div>
  );
}

export default ChooseOnePicture;
