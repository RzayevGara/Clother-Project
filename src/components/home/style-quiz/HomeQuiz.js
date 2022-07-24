import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function HomeQuiz() {
  const token = localStorage.getItem("customer_token")
  const userQuiz = useSelector((state) => state.quiz.userQuiz)


  return (
    <div className='home-quiz'>
        <div className='home-quiz-container'>
            <h2>Ready to get started with Clother?</h2>
            <p>Click to the button and create your style.</p>
            <Link to={token?!userQuiz?'/quiz':'/quiz-result':"/login"} className="btn-quiz">Start your style quiz</Link>
        </div>
    </div>
  )
}

export default HomeQuiz