import TitleImage from "../../../assets/images/picture/header-img_mobile.png";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

function Title() {
  const token = localStorage.getItem("customer_token")
  const userQuiz = useSelector((state) => state.quiz.userQuiz)

  return (
    <div className="title">
      <div className="title-container">
        <div className="title-text">
          <h1>Custom clothing, just for you</h1>
          <p>
            Stress-free shopping - receive your personal selection curated by
            your stylist, tailored to you!
          </p>
          <Link className="btn-quiz" to={token?!userQuiz?'/quiz':'/quiz-result':"/login"}>Learn your style</Link>
        </div>
        <img src={TitleImage} alt="titleImage" />
      </div>
    </div>
  );
}

export default Title;
