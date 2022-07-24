import { ReactComponent as QuestionIcon } from "../../../assets/images/svg-icons/Question_light.svg";
import {Link} from 'react-router-dom'

function Questions() {
  return (
    <div className="about-question">
      <div className="about-question_container">
        <QuestionIcon />
        <h4>Questions?</h4>
        <p>
          Visit our <Link to="/faq"><span>FAQs</span></Link> to find answers to common questions, or
          contact us at <span onClick={() => window.location = 'mailto:clother.lab@gmail.com'}>clother.lab@gmail.com.</span>
        </p>
      </div>
    </div>
  );
}

export default Questions;
