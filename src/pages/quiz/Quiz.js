import {quizTypes} from '../../redux/actions/quiztype'
import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import Questions from '../../components/quiz/questions/Questions'
import Stepper from '../../components/quiz/stepper/Stepper'
import { Helmet } from 'react-helmet'

function Quiz() {
  const {getQuizQuestions}  = quizTypes
    const dispatch = useDispatch()
    const index = useSelector((state) => state.quiz.index);
    const questionsLength = useSelector((state) => state.quiz.questions.length);

    useEffect(() => {
        dispatch(getQuizQuestions())
    },[dispatch, getQuizQuestions])


    useEffect(()=>{
      const changePage = () => {
        window.scrollTo({top: 0});
      };
      changePage()
    }, [index])

  return (

    <main className="quiz-page">
        <Helmet>
            <title>Quiz | Clother</title>
        </Helmet>
        <div className="quiz-page_container">
            <Questions/>
            { questionsLength &&
              index<= questionsLength?
              <Stepper/>
              : null

            }
        </div>
    </main>
  )
}

export default Quiz