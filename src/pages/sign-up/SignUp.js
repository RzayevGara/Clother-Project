import { Link, useNavigate } from "react-router-dom";
import NameInput from '../../components/sign-in/name-input/NameInput'
import SurnameInput from '../../components/sign-in/surname-input/SurnameInput'
import PasswordInput from "../../components/sign-in/password-input/PasswordInput";
import EmailInput from "../../components/sign-in/email-input/EmailInput"
import PhoneInput from '../../components/sign-in/phone-input/PhoneInput'
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux'
import { TailSpin } from "react-loading-icons";
import React, {useEffect} from 'react'
import {authActions} from '../../redux/actions/AuthActions'
import { Helmet } from "react-helmet";

function SignUp() {
  const {SignUpFunction} = authActions
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth.loading)
  const errorMessage = useSelector((state) => state.auth.signErrorMessage)
  
  const navigate = useNavigate()

  const token = useSelector((state)=>state.auth.token)

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => {
    dispatch(SignUpFunction(data))
  };

  useEffect(() =>{
    if(token){
        navigate("/", { replace: true });
    }
  }, [token, navigate])

  useEffect(()=>{
    const changePage = () => {
      window.scrollTo({top: 0});
    };
    changePage()
  }, [])

  return (
    <main className="sign-up">
      <Helmet>
        <title>Sign Up | Clother</title>
      </Helmet>
      <div className="sign-up_container">
        <form onSubmit={handleSubmit(onSubmit)}>
          {
            loading &&
            <div className="create-account">
              <TailSpin stroke="#2C3244" className="loading"/>
            </div>
          }
          <h1>Sign Up</h1>

          {/* name input */}
          <NameInput
            error={
              <ErrorMessage
                errors={errors}
                name="nameInput"
                render={({ message }) => <p className="error-message">{message}</p>}
              />
            }
            func={
              {...register("nameInput", {
                required: "This field is required.",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 letters."
                }
              })}
            }
          />

          {/* surname input */}
          <SurnameInput
            error={
            <ErrorMessage
                  errors={errors}
                  name="surnameInput"
                  render={({ message }) => <p className="error-message">{message}</p>}
              />
            }
            func={
              {...register("surnameInput", {
                required: "This field is required.",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 letters."
                }
              })}
            }
          />
         

          {/* email input */}
          <EmailInput
            errorMessage={errorMessage}
            error={
              <ErrorMessage
              errors={errors}
              name="emailInput"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p className="error-message" key={type}>
                        {message}
                      </p>
                    ))
                  : null;
              }}
            />
          }
          func={
            {...register("emailInput", {
              required: "This field is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Wrong email address.",
              },
            })}
          }
          />

          {/* password input */}
          <PasswordInput
            label="Password"
            placeholder="password"
            error={
              <ErrorMessage
                errors={errors}
                name="passwordInput"
                render={({ messages }) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p className="error-message" key={type}>
                          {message}
                        </p>
                      ))
                    : null;
                }}
              />
            }
            func={
              {...register("passwordInput", {
                required: "This field is required.",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/i,
                  message: "Please choose a stronger password. Try a mix of letters, numbers, and symbols (@$!%*?&.)",
                },
              })}
            }
          />

          {/* confirm password input */}
          <PasswordInput
            label="Confirm password"
            placeholder="confirm password"
            error={
              <ErrorMessage
                errors={errors}
                name="confirmPasswordInput"
                render={({ messages }) => {
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p className="error-message" key={type}>
                          {message}
                        </p>
                      ))
                    : null;
                }}
              />
            }
            func={
              {...register("confirmPasswordInput", {
                required: "This field is required.",
                validate: (val) => {
                  if (watch('passwordInput') !== val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            }
          />

          {/* phone number input */}
          <PhoneInput
            error={
              <ErrorMessage
              errors={errors}
              name="phoneInput"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p className="error-message" key={type}>
                        {message}
                      </p>
                    ))
                  : null;
              }}
            />
            }
            func={
              {...register("phoneInput", {
                required: "This field is required.",
                pattern: {
                  value: /^[\d ]*$/i,
                  message: "Wrong phone number.",
                },
              })}
            }
          />
          <button className="sign-up-btn" type="submit">
            Sign up
          </button>
          <p className="sign-message">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default SignUp;
