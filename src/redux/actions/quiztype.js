import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../client/client";


// get quiz questions
const getQuizQuestions = createAsyncThunk("getQuizQuestions", async () => {
  const response = await client.get("/core/question/?gender=all");
  return response;
});

// get gender specific questions
const getGenderQuizQuestions = createAsyncThunk("getGenderQuizQuestions", async (gender) => {
  const response = await client.get(`core/question/?gender=${gender}`);
  return response;
});

// Quiz Type oi
const QuizTypeOI = createAsyncThunk("QuizTypeOI", async (payload) => {
  if (!payload.url) {
    const response = await client.post("core/question-answer/", {
      answer_1: payload.singleValueInput,
      answer_2: "",
      answer_3: "",
      answer_4: "",
      answer_5: "",
      answer_6: "",
      answer_to_image: false,
      question: payload.id,
    });
    return response;
  } else {
    const response = await client.patch(payload.url, {
      answer_1: payload.singleValueInput,
      answer_2: "",
      answer_3: "",
      answer_4: "",
      answer_5: "",
      answer_6: "",
      answer_to_image: false,
      question: payload.id,
    });
    return response;
  }
});

// Quiz Type so
const QuizTypeSO = createAsyncThunk("QuizTypeSO", async (payload) => {
  if (!payload.url) {
    const response = await client.post("core/question-answer/", {
      answer_1: payload.selectedOption,
      answer_2: "",
      answer_3: "",
      answer_4: "",
      answer_5: "",
      answer_6: "",
      answer_to_image: false,
      question: payload.id,
    });
    return response;
  } else {
    const response = await client.patch(payload.url, {
      answer_1: payload.selectedOption,
      answer_2: "",
      answer_3: "",
      answer_4: "",
      answer_5: "",
      answer_6: "",
      answer_to_image: false,
      question: payload.id,
    });
    return response;
  }
});

// Quiz Type iyo
const QuizTypeIYO = createAsyncThunk("QuizTypeIYO", async (payload) => {
  if (!payload.url) {
    const response = await client.post("core/question-answer/", {
      answer_1: "",
      answer_2: "",
      answer_3: "",
      answer_4: "",
      answer_5: "",
      answer_6: "",
      answer_to_image: payload.like,
      question: payload.id,
    });
    return response;
  } else {
    const response = await client.patch(payload.url, {
      answer_1: "",
      answer_2: "",
      answer_3: "",
      answer_4: "",
      answer_5: "",
      answer_6: "",
      answer_to_image: payload.like,
      question: payload.id,
    });
    return response;
  }
});

// Quiz Type sm
const QuizTypeSM = createAsyncThunk("QuizTypeSM", async (payload) => {
  if (!payload.url) {
    const response = await client.post("core/question-answer/", {
      answer_1: payload.answer1,
      answer_2: payload.answer2,
      answer_3: payload.answer3,
      answer_4: payload.answer4,
      answer_5: payload.answer5,
      answer_6: payload.answer6,
      answer_to_image: false,
      question: payload.id,
    });
    return response;
  } else {
    const response = await client.patch(payload.url, {
      answer_1: payload.answer1,
      answer_2: payload.answer2,
      answer_3: payload.answer3,
      answer_4: payload.answer4,
      answer_5: payload.answer5,
      answer_6: payload.answer6,
      answer_to_image: false,
      question: payload.id,
    });
    return response;
  }
});

// Quiz Type soi
const QuizTypeSOI = createAsyncThunk("QuizTypeSOI", async (payload) => {
  if (!payload.url) {
    const response = await client.post("core/question-answer/", {
      answer_1: payload.selectedImage,
      answer_2: "",
      answer_3: "",
      answer_4: "",
      answer_5: "",
      answer_6: "",
      answer_to_image: true,
      question: payload.id,
    });
    return response;
  } else {
    const response = await client.patch(payload.url, {
      answer_1: payload.selectedImage,
      answer_2: "",
      answer_3: "",
      answer_4: "",
      answer_5: "",
      answer_6: "",
      answer_to_image: true,
      question: payload.id,
    });
    return response;
  }
});

// Quiz Type smi
const QuizTypeSMI = createAsyncThunk("QuizTypeSMI", async (payload) => {
  if (!payload.url) {
    const response = await client.post("core/question-answer/", {
      answer_1: payload.img1,
      answer_2: payload.img2,
      answer_3: payload.img3,
      answer_4: payload.img4,
      answer_5: payload.img5,
      answer_6: payload.img6,
      answer_to_image: true,
      question: payload.id,
    });
    return response;
  } else {
    const response = await client.patch(payload.url, {
      answer_1: payload.img1,
      answer_2: payload.img2,
      answer_3: payload.img3,
      answer_4: payload.img4,
      answer_5: payload.img5,
      answer_6: payload.img6,
      answer_to_image: true,
      question: payload.id,
    });
    return response;
  }
});

// send questions id
const sendQuestionsID = createAsyncThunk(
  "sendQuestionsID",
  async (payload) => {
    const response = await client.post(
      "core/quizwere/",
      {
        question_answer: payload.answerID,
      },
      { headers: {Authorization: `Token ${payload.token}`}}
    );
    return response;
  }
);

export const quizTypes = {
  getQuizQuestions,
  QuizTypeOI,
  QuizTypeSO,
  QuizTypeIYO,
  QuizTypeSM,
  QuizTypeSOI,
  QuizTypeSMI,
  sendQuestionsID,
  getGenderQuizQuestions
};
