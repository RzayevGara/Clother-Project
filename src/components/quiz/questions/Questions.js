import {useSelector } from "react-redux";
import SingleInput from '../type/SingleInput'
import ChooseOne from '../type/ChooseOne'
import ImageLike from '../type/ImageLike'
import ChooseMultiple from '../type/ChooseMultiple'
import ChooseOnePicture from '../type/ChooseOnePicture'
import ChooseMultiplePicture from '../type/ChooseMultiplePicture'
import QuizDone from '../quiz-done/QuizDone'

function Questions() {
  const index = useSelector((state) => state.quiz.index);
  const question = useSelector((state) => state.quiz.questions[index]);
  const questions = useSelector((state) => state.quiz.questions);
  const questionsLength = useSelector((state) => state.quiz.questions.length);



  return (
    <div className="questions">
      <div className="questions_container">
        {question &&
          question.question_type==="oi"?
          <SingleInput data={question}/>
          :
          question &&
          question.question_type==="so"?
          <ChooseOne data={question}/>
          : 
          question &&
          question.question_type==="iyo"?
          <ImageLike data={question}/>
          : 
          question &&
          question.question_type==="sm"?
          <ChooseMultiple data={question}/>
          : 
          question &&
          question.question_type==="soi"?
          <ChooseOnePicture data={question}/>
          : 
          question &&
          question.question_type==="smi"?
          <ChooseMultiplePicture data={question}/>
          :
          questions &&
          index===questionsLength?
          <QuizDone/>
          : null
        }
      </div>
    </div>
  );
}

export default Questions;
