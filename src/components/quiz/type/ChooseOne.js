import React, {useRef, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {setSelectedOption,setSelectedOptionErrorMessage} from '../../../redux/reducer/QuizReducer'
import {ReactComponent as SuccessIcon} from '../../../assets/images/svg-icons/success-icon.svg'

function ChooseOne(props) {
  const dispatch = useDispatch();
  const questions = props.data;
  const ref = useRef([])

  const errorMessage = useSelector((state) => state.quiz.selectedOptionErrorMessage)
  const questionIndex = useSelector((state) => state.quiz.index)
  
  const chooseOne =(clickIndex)=>{
    ref.current.forEach((el, index)=>{
      if(clickIndex===index){
        el.classList.add('active-variant')
        dispatch(setSelectedOption(el.innerText))
      }else{
        el.classList.remove('active-variant')
      }
    })
  }

  useEffect(()=>{
    dispatch(setSelectedOptionErrorMessage(null))
    ref.current.forEach((el)=>{
      if(el){
        el.classList.remove('active-variant')
      }
    })
  }, [questionIndex, dispatch])
  
  return (
    <div className="choose-one">
      <p className="question-title">{questions.question_text}</p>
      <div>
        {questions.answer_1 && <p ref={(element) => {ref.current[0] = element}} onClick={()=>chooseOne(0)}>{questions.answer_1} <SuccessIcon/></p>}
        {questions.answer_2 && <p ref={(element) => {ref.current[1] = element}} onClick={()=>chooseOne(1)}>{questions.answer_2} <SuccessIcon/></p>}
        {questions.answer_3 && <p ref={(element) => {ref.current[2] = element}} onClick={()=>chooseOne(2)}>{questions.answer_3} <SuccessIcon/></p>}
        {questions.answer_4 && <p ref={(element) => {ref.current[3] = element}} onClick={()=>chooseOne(3)}>{questions.answer_4} <SuccessIcon/></p>}
        {questions.answer_5 && <p ref={(element) => {ref.current[4] = element}} onClick={()=>chooseOne(4)}>{questions.answer_5} <SuccessIcon/></p>}
        {questions.answer_6 && <p ref={(element) => {ref.current[5] = element}} onClick={()=>chooseOne(5)}>{questions.answer_6} <SuccessIcon/></p>}
      </div>
      {errorMessage&&
      <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default ChooseOne;
