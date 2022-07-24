import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseIndex,
  decreaseIndex,
  setSingleInputErrorMessage,
  setSelectedOptionErrorMessage,
  setLikeErrorMessage,
  setAnswerErrorMessage,
  setSelectedImageErrorMessage,
  setImgErrorMessage,
  setUserQuiz
} from "../../../redux/reducer/QuizReducer";
import { quizTypes} from '../../../redux/actions/quiztype'
import { unwrapResult } from "@reduxjs/toolkit";
import {useNavigate} from 'react-router-dom'

export default function DotsMobileStepper() {
  const {
    QuizTypeOI,
    QuizTypeSO,
    QuizTypeIYO,
    QuizTypeSM,
    QuizTypeSOI,
    QuizTypeSMI,
    sendQuestionsID,
    getGenderQuizQuestions
  } = quizTypes;
  const navigate = useNavigate()
  const theme = useTheme();
  const dispatch = useDispatch();

  const token = useSelector((state)=>state.auth.token)
  

  const index = useSelector((state) => state.quiz.index);
  const questionsNumber = useSelector((state) => state.quiz.questions.length);
  const question = useSelector((state) => state.quiz.questions[index]);
  const singleValueInput = useSelector((state) => state.quiz.singleInputValue);
  const selectedOption = useSelector((state) => state.quiz.selectedOption);
  const like = useSelector((state) => state.quiz.like);
  const answer1 = useSelector((state) => state.quiz.answer1);
  const answer2 = useSelector((state) => state.quiz.answer2);
  const answer3 = useSelector((state) => state.quiz.answer3);
  const answer4 = useSelector((state) => state.quiz.answer4);
  const answer5 = useSelector((state) => state.quiz.answer5);
  const answer6 = useSelector((state) => state.quiz.answer6);
  const selectedImage = useSelector((state) => state.quiz.selectedImage);
  const img1 = useSelector((state) => state.quiz.img1);
  const img2 = useSelector((state) => state.quiz.img2);
  const img3 = useSelector((state) => state.quiz.img3);
  const img4 = useSelector((state) => state.quiz.img4);
  const img5 = useSelector((state) => state.quiz.img5);
  const img6 = useSelector((state) => state.quiz.img6);
  const answerID = useSelector((state) => state.quiz.answerID);

  const handleNext = () => {
    // Quiz Type oi
    if (question.question_type === "oi") {
      if (singleValueInput !== null && singleValueInput !== "") {
        if (answerID[index] === undefined) {
          dispatch(QuizTypeOI({ singleValueInput, url: null, id: question.id }))
            .then(unwrapResult)
            .then(() => {
              dispatch(increaseIndex());
            });
        } else {
          dispatch(
            QuizTypeOI({
              singleValueInput,
              url: `core/question-answer/${answerID[index]}/`,
              id: question.id 
            })
          )
            .then(unwrapResult)
            .then(() => {
              dispatch(increaseIndex());
            });
        }
      } else {
        dispatch(setSingleInputErrorMessage("This field is required."));
      }
    }

    // Quiz Type so
    if (question.question_type === "so") {
      if (selectedOption !== null) {
        if(question.question_text ==="Cinsiyətiniz"){
          if (answerID[index] === undefined){
            dispatch(QuizTypeSO({ selectedOption, url: null, id: question.id  }))
            if(selectedOption==="Qadın"){
              dispatch(getGenderQuizQuestions("woman"))
              .then(()=>{
                dispatch(increaseIndex());
              })
            }else{
              dispatch(getGenderQuizQuestions("man"))
              .then(()=>{
                dispatch(increaseIndex());
              })
            }
          }else{
            dispatch(QuizTypeSO({ selectedOption, url: `core/question-answer/${answerID[index]}/`, id: question.id  }))
            if(selectedOption==="Qadın"){
              dispatch(getGenderQuizQuestions("woman"))
              .then(()=>{
                dispatch(increaseIndex());
              })
            }else{
              dispatch(getGenderQuizQuestions("man"))
              .then(()=>{
                dispatch(increaseIndex());
              })
            }
          }

        }else{
          if (answerID[index] === undefined) {
            dispatch(QuizTypeSO({ selectedOption, url: null, id: question.id  }))
              .then(unwrapResult)
              .then(() => {
                dispatch(increaseIndex());
              });
          } else {
            dispatch(
              QuizTypeSO({
                selectedOption,
                url: `core/question-answer/${answerID[index]}/`,
                id: question.id 
              })
            )
              .then(unwrapResult)
              .then(() => {
                dispatch(increaseIndex());
              });
          }
        }
      } else {
        dispatch(setSelectedOptionErrorMessage("Choose one of these"));
      }
    }

    // Quiz Type iyo
    if (question.question_type === "iyo") {
      if (like !== null) {
        if (answerID[index] === undefined) {
          dispatch(QuizTypeIYO({ like, url: null, id: question.id  }))
            .then(unwrapResult)
            .then(() => {
              dispatch(increaseIndex());
            });
        } else {
          dispatch(
            QuizTypeIYO({
              like,
              url: `core/question-answer/${answerID[index]}/`,
              id: question.id 
            })
          )
            .then(unwrapResult)
            .then(() => {
              dispatch(increaseIndex());
            });
        }
      } else {
        dispatch(setLikeErrorMessage("Liked or not?"));
      }
    }

    // Quiz Type sm
    if (question.question_type === "sm") {
      if (
        answer1 !== null ||
        answer2 !== null ||
        answer3 !== null ||
        answer4 !== null ||
        answer5 !== null ||
        answer6 !== null
      ) {
        if (answerID[index] === undefined) {
          dispatch(
            QuizTypeSM({ answer1, answer2, answer3, answer4, answer5, answer6, url: null, id: question.id  })
          )
            .then(unwrapResult)
            .then(() => {
              dispatch(increaseIndex());
            });
        } else {
          dispatch(
            QuizTypeSM({
              answer1,
              answer2,
              answer3,
              answer4,
              answer5,
              answer6,
              url: `core/question-answer/${answerID[index]}/`,
              id: question.id 
            })
          )
            .then(unwrapResult)
            .then(() => {
              dispatch(increaseIndex());
            });
        }
      } else {
        dispatch(setAnswerErrorMessage("You must choose at least 1 option"));
      }
    }

    // Quiz Type soi
    if (question.question_type === "soi") {
      if (selectedImage !== null) {
        if (answerID[index] === undefined) {
          dispatch(QuizTypeSOI({ selectedImage, url: null, id: question.id  }))
            .then(unwrapResult)
            .then(() => {
              dispatch(increaseIndex());
            });
        } else {
          dispatch(
            QuizTypeSOI({
              selectedImage,
              url: `core/question-answer/${answerID[index]}/`,
              id: question.id 
            })
          )
            .then(unwrapResult)
            .then(() => {
              dispatch(increaseIndex());
            });
        }
      } else {
        dispatch(setSelectedImageErrorMessage("Choose one of these"));
      }
    }

    // Quiz Type smi
    if (question.question_type === "smi") {
      if (img1 !== null || img2 !== null || img3 !== null || img4 !== null || img5 !== null || img6 !== null) {
        if (answerID[index] === undefined) {
          dispatch(QuizTypeSMI({ img1, img2, img3, img4, img5, img6, url: null, id: question.id  }))
            .then(unwrapResult)
            .then(() => {
              dispatch(increaseIndex());
            });
        } else {
          dispatch(
            QuizTypeSMI({
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
              url: `core/question-answer/${answerID[index]}/`,
              id: question.id 
            })
          )
            .then(unwrapResult)
            .then(() => {
              dispatch(increaseIndex());
            });
        }
      } else {
        dispatch(setImgErrorMessage("You must choose at least 1 option"));
      }
    }
  };

  const handleBack = () => {
    dispatch(decreaseIndex());
  };

  const sendID = () => {
    dispatch(sendQuestionsID({answerID, token}));
    dispatch(setUserQuiz(true))
    navigate("/quiz-result", { replace: true })
  };

  return (
    <MobileStepper
      className="quiz-stepper"
      variant="progress"
      steps={questionsNumber + 1}
      position="static"
      activeStep={index}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        index < questionsNumber ? (
          <Button size="small" onClick={(e) => handleNext(e)}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        ) : (
          <Button size="small" onClick={sendID}>
            Finish
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        )
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={index === 0}>
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
