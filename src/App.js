import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout/Layout'

// pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Profile from './pages/profile/Profile'
import Faq from './pages/faq/Faq'
import SignUp from './pages/sign-up/SignUp'
import Login from './pages/login/Login'
import PasswordReset from './pages/password-reset/PasswordReset'
import EmailLink from './pages/email-link/EmailLink'
import Error from './pages/error/Error'
import Quiz from './pages/quiz/Quiz'
import QuizResult from './pages/quiz-finish/QuizFinish'

//profile sub component
import ProfileHome from './components/profile/content/home/Home'
import YourStyle from './components/profile/content/your-style/YourStyle'
import MyAccount from './components/profile/content/my-account/MyAccount'
import Orders from './components/profile/content/orders/Orders'
import Payments from './components/profile/content/payments/Payments'

import { authActions } from './redux/actions/AuthActions'
import {setUserQuiz, setIndex, setAnswerID} from './redux/reducer/QuizReducer'
import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'


function App() {
  const {TestToken} = authActions
  const dispatch = useDispatch()
  const token = useSelector((state)=>state.auth.token)

  useEffect(()=>{
    if(localStorage.getItem('customer_token')){
      dispatch(TestToken())
      .then(({payload})=>{
        if(payload.quiz===null){
        dispatch(setUserQuiz(false))
        dispatch(setIndex(0))
        dispatch(setAnswerID([]))
        }
        else{
          dispatch(setUserQuiz(true))
        }
      })
      .catch(()=>{
        console.log("token not found")
      })
    }
  }, [token, dispatch, TestToken])

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="faq" element={<Faq/>}/>
        <Route path="profile" element={<Profile/>}>
          <Route index element={<ProfileHome/>}/>
          <Route path="your-style" element={<YourStyle/>}/>
          <Route path='my-account' element={<MyAccount />}/>
          <Route path='orders' element={<Orders />}/>
          <Route path='payments' element={<Payments />}/>
        </Route>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path='password/reset' element={<PasswordReset />} />
        <Route path='password/reset/:uid/:token' element={<EmailLink />} />
        <Route path='quiz' element={<Quiz/>} />
        <Route path='quiz-result' element={<QuizResult/>} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
