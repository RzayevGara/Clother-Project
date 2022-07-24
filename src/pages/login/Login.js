import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/sign-in/password-input/PasswordInput";
import EmailInput from "../../components/sign-in/email-input/EmailInput"
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux'
import {authActions} from '../../redux/actions/AuthActions'
import { TailSpin } from "react-loading-icons";
import React, {useEffect} from 'react'
import { Helmet } from "react-helmet";

function SignUp() {
  const {LoginFunction} = authActions
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth.loading)
  const errorMessage = useSelector((state) => state.auth.loginErrorMessage)
  
  const navigate = useNavigate()

  const token = useSelector((state)=>state.auth.token)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => {
    dispatch(LoginFunction(data))
  };

    useEffect(() =>{
        if(token){
            navigate("/", { replace: true });
        }
    }, [token, navigate])

    useEffect(() => {
      const changePage = () => {
        window.scrollTo({top: 0});
      };
      changePage()
    }, []);

  return (
    <main className="login">
      <Helmet>
        <title>Login | Clother</title>
      </Helmet>
      <div className="login_container">
        <form onSubmit={handleSubmit(onSubmit)}>
          {
            loading &&
            <div className="login-account">
              <TailSpin stroke="#2C3244" className="loading"/>
            </div>
          }
          <h1>Login</h1>

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
          
          <PasswordInput
            label="Password"
            forgotPassword
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
              })}
            }
          />
          <button className="login-btn" type="submit">
            Log in
          </button>
          <p className="sign-message">
            Don't have an account? <Link to="/sign-up">Sign-up</Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default SignUp;
