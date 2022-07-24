import { createSlice } from "@reduxjs/toolkit";
import { quizTypes } from "../actions/quiztype";

const {
  getQuizQuestions,
  QuizTypeOI,
  QuizTypeSO,
  QuizTypeIYO,
  QuizTypeSM,
  QuizTypeSOI,
  QuizTypeSMI,
  sendQuestionsID,
  getGenderQuizQuestions
} = quizTypes;

const initialState = {
  questions: "",
  index: 0,
  loading: false,
  answerID: [],
  quizSuccess: "success",
  userQuiz: true,
  genderIndex: "",


  // Quiz Type oi
  singleInputValue: null,
  singleInputErrorMessage: "",

  // Quiz Type so
  selectedOption: null,
  selectedOptionErrorMessage: "",

  // Quiz Type iyo
  like: null,
  likeErrorMessage: "",

  // Quiz Type sm
  answer1: null,
  answer2: null,
  answer3: null,
  answer4: null,
  answer5: null,
  answer6: null,
  answerErrorMessage: "",

  // Quiz Type soi
  selectedImage: null,
  selectedImageErrorMessage: "",

  // Quiz Type smi
  img1: null,
  img2: null,
  img3: null,
  img4: null,
  img5: null,
  img6: null,
  imgErrorMessage: "",
};

export const QuizReducer = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    increaseIndex: (state) => {
      state.index += 1;
    },
    decreaseIndex: (state) => {
      state.index -= 1;
    },

    setIndex: (state, action) => {
      state.index = action.payload
    },

    setUserQuiz: (state, action) => {
      state.userQuiz = action.payload
    },

    setAnswerID: (state, action) =>{
      state.answerID = action.payload
    },


    // Quiz Type oi
    setSingleInputValue: (state, action) => {
      state.singleInputValue = action.payload;
      if (state.singleInputValue) {
        state.singleInputErrorMessage = null;
      }
    },
    setSingleInputErrorMessage: (state, action) => {
      state.singleInputErrorMessage = action.payload;
      state.singleInputValue = "";
    },

    // Quiz Type so
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
      if (state.selectedOption) {
        state.selectedOptionErrorMessage = null;
      }
    },
    setSelectedOptionErrorMessage: (state, action) => {
      state.selectedOptionErrorMessage = action.payload;
      state.selectedOption = null;
    },

    // Quiz Type iyo
    setLike: (state, action) => {
      state.like = action.payload;
      if (state.like !== null) {
        state.likeErrorMessage = null;
      }
    },
    setLikeErrorMessage: (state, action) => {
      state.likeErrorMessage = action.payload;
      state.like = null;
    },

    // Quiz Type sm
    setAnswer: (state, { payload }) => {
      switch(payload.index){
        case 0:
          state.answer1 = payload.answer;
          break;
        case 1:
          state.answer2 = payload.answer;
          break;
        case 2:
          state.answer3 = payload.answer;
          break;
        case 3:
          state.answer4 = payload.answer;
          break;
        case 4:
          state.answer5 = payload.answer;
          break;
        case 5:
          state.answer6 = payload.answer;
          break;
        default:
          console.log("index not found")
      }
      if (
        state.answer1 !== null ||
        state.answer2 !== null ||
        state.answer3 !== null ||
        state.answer4 !== null ||
        state.answer5 !== null ||
        state.answer6 !== null
      ) {
        state.answerErrorMessage = null;
      }
    },
    setAnswerErrorMessage: (state, action) => {
      state.answerErrorMessage = action.payload;
      state.answer1 = null;
      state.answer2 = null;
      state.answer3 = null;
      state.answer4 = null;
      state.answer5 = null;
      state.answer6 = null;
    },

    // Quiz Type soi
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
      if (state.selectedImage !== null) {
        state.selectedImageErrorMessage = null;
      }
    },
    setSelectedImageErrorMessage: (state, action) => {
      state.selectedImageErrorMessage = action.payload;
      state.selectedImage = null;
    },

    // Quiz Type smi
    setImgAnswer: (state, { payload }) => {
      switch (payload.index){
        case 0:
          state.img1 = payload.answer;
          break;
        case 1:
          state.img2 = payload.answer;
          break;
        case 2:
          state.img3 = payload.answer;
          break;
        case 3:
          state.img4 = payload.answer;
          break;
        case 4:
          state.img5 = payload.answer;
          break;
        case 5:
          state.img6 = payload.answer;
          break;
        default:
          console.log("index not found")

      }
      if (
        state.img1 !== null ||
        state.img2 !== null ||
        state.img3 !== null ||
        state.img4 !== null ||
        state.img5 !== null ||
        state.img6 !== null
      ) {
        state.imgErrorMessage = null;
      }
    },
    setImgErrorMessage: (state, action) => {
      state.imgErrorMessage = action.payload;
      state.img1 = null;
      state.img2 = null;
      state.img3 = null;
      state.img4 = null;
      state.img5 = null;
      state.img6 = null;
    },
  },
  extraReducers: {
    // getQuizQuestions
    [getQuizQuestions.fulfilled]: (state, { payload }) => {
      state.questions = payload.data;
      state.genderIndex = payload.data.length
    },

    // getGenderQuizQuestions
    [getGenderQuizQuestions.fulfilled]: (state, { payload }) => {
      state.questions = state.questions.slice(0, state.genderIndex)
      state.questions = state.questions.concat(payload.data)
      state.answerID = state.answerID.slice(0, state.genderIndex)
    },

    // QuizTypeOI
    [QuizTypeOI.pending]: (state) => {
      state.loading = true;
    },
    [QuizTypeOI.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.singleInputErrorMessage = false;
      state.singleInputValue = null;
      if (!state.answerID.includes(payload.data.id)) {
        state.answerID.push(payload.data.id);
      }
    },

    // QuizTypeSO
    [QuizTypeSO.pending]: (state) => {
      state.loading = true;
    },
    [QuizTypeSO.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.selectedOptionErrorMessage = "";
      state.selectedOption = null;
      if (!state.answerID.includes(payload.data.id)) {
        state.answerID.push(payload.data.id);
      }
    },

    // QuizTypeIYO
    [QuizTypeIYO.pending]: (state) => {
      state.loading = true;
    },
    [QuizTypeIYO.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.likeErrorMessage = "";
      state.like = null;
      if (!state.answerID.includes(payload.data.id)) {
        state.answerID.push(payload.data.id);
      }
    },

    // QuizTypeSM
    [QuizTypeSM.pending]: (state) => {
      state.loading = true;
    },
    [QuizTypeSM.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.answerErrorMessage = "";
      state.answer1 = null;
      state.answer2 = null;
      state.answer3 = null;
      state.answer4 = null;
      state.answer5 = null;
      state.answer6 = null;
      if (!state.answerID.includes(payload.data.id)) {
        state.answerID.push(payload.data.id);
      }
    },

    // QuizTypeSOI
    [QuizTypeSOI.pending]: (state) => {
      state.loading = true;
    },
    [QuizTypeSOI.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.selectedImageErrorMessage = "";
      state.selectedImage = null;
      if (!state.answerID.includes(payload.data.id)) {
        state.answerID.push(payload.data.id);
      }
    },

    // QuizTypeSMI
    [QuizTypeSMI.pending]: (state) => {
      state.loading = true;
    },
    [QuizTypeSMI.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.imgErrorMessage = "";
      state.img1 = null;
      state.img2 = null;
      state.img3 = null;
      state.img4 = null;
      state.img5 = null;
      state.img6 = null;
      if (!state.answerID.includes(payload.data.id)) {
        state.answerID.push(payload.data.id);
      }
    },

    // send questions id
    [sendQuestionsID.pending]: (state) => {
      state.loading = true;
    },
    [sendQuestionsID.fulfilled]: (state) => {
      state.quizSuccess = "success"
      state.loading = false;
    },
    [sendQuestionsID.rejected]: (state) => {
      state.quizSuccess = "error"
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increaseIndex,
  decreaseIndex,
  setSingleInputValue,
  setSingleInputErrorMessage,
  setSelectedOption,
  setSelectedOptionErrorMessage,
  setLike,
  setLikeErrorMessage,
  setAnswer,
  setAnswerErrorMessage,
  setSelectedImage,
  setSelectedImageErrorMessage,
  setImgAnswer,
  setImgErrorMessage,
  setIndex,
  setUserQuiz,
  setAnswerID
} = QuizReducer.actions;

export default QuizReducer.reducer;
