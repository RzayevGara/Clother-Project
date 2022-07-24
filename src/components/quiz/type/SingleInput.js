import {setSingleInputValue, setSingleInputErrorMessage} from '../../../redux/reducer/QuizReducer'
import { useDispatch, useSelector} from "react-redux";
import React, {useEffect, useRef} from "react";

function SingleInput(props) {
    const dispatch = useDispatch();
    const questions = props.data
    const singleInputErrorMessage = useSelector((state) => state.quiz.singleInputErrorMessage)
    const questionIndex = useSelector((state) => state.quiz.index)
    const ref = useRef()

    useEffect(()=>{
        dispatch(setSingleInputErrorMessage(null))
        ref.current.value=null
    }, [questionIndex, dispatch])

    return (
        <div className="single-input">
            <p className="question-title">{questions.question_text}</p>
            <div>
                <input ref={ref} onChange={(e)=>dispatch(setSingleInputValue(e.target.value.trimStart()))}/>
            </div>
            {
                singleInputErrorMessage &&
                <p className="error-message">{singleInputErrorMessage}</p>
            }
        </div>
    )
}

export default SingleInput