import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ErrorIcon } from "../../assets/images/svg-icons/error-svg.svg";
import { setIndex } from "../../redux/reducer/QuizReducer";
import React, { useEffect } from "react";
import { orderActions } from "../../redux/actions/OrderActions";
import {setLoading} from '../../redux/reducer/OrderReducer'
import { ToastContainer, toast } from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';
import "react-toastify/dist/ReactToastify.css";

function QuizFinish() {
    const quizSuccess = useSelector((state) => state.quiz.quizSuccess);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userQuiz = useSelector((state) => state.quiz.userQuiz);
    const token = useSelector((state) => state.auth.token);
    const loading = useSelector((state) => state.order.loading);
    
    const { OrderNowFunction } = orderActions;
    const notify = () => toast.success('Order added successfully', {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

  const updateQuiz = () => {
    dispatch(setIndex(0));
    navigate("/quiz", { replace: true });
  };

  const orderNow = () => {
    dispatch(setLoading(true));
    dispatch(OrderNowFunction(token))
      .then(() => {
        setTimeout(()=>{
            notify();
            dispatch(setLoading(false));

        }, 700)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!userQuiz) {
      navigate("/quiz", { replace: true });
    }
  }, [userQuiz, navigate]);

  useEffect(() => {
    const changePage = () => {
      window.scrollTo({ top: 0 });
    };
    changePage();
  }, []);

  if (quizSuccess === "error") {
    return (
      <div className="quiz-finish_error">
        <ErrorIcon fill="#2C3244" />
        <h3>An unexpected error has occurred</h3>
        <button onClick={updateQuiz} to="/">
          Try again
        </button>
      </div>
    );
  } else {
    return (
      <div className="quiz-finish_success">
        <h3>We are ready to style you</h3>
        <div className="quiz-finish_buttons">
          <p>You can order your box for 9.90 Azn.</p>
          <button
            disabled={loading ? true : false}
            className="order-now-btn"
            onClick={orderNow}
          >
            Order Now
            {
                loading &&
                <div className="order-loading-div">
                    <CircularProgress />
                </div>
            }
          </button>
          <p>or</p>
          <button className="update-quiz-btn" onClick={updateQuiz} to="/">
            Update your quiz
          </button>
        </div>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default QuizFinish;
