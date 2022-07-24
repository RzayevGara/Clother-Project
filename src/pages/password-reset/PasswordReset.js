import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux'
import {setMailSentStatus } from '../../redux/reducer/AuthReducer'
import { authActions } from "../../redux/actions/AuthActions";
import { TailSpin } from "react-loading-icons";
import {ReactComponent as MailPic} from '../../assets/images/svg-icons/mail-icon.svg'
import React, {useEffect} from 'react'
import {useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function PasswordReset() {
    const {PasswordResetFunction} = authActions
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const loading = useSelector((state) => state.auth.loading)
    const mailSent = useSelector((state) => state.auth.mailSent)
    const token = useSelector((state)=>state.auth.token)
    const passwordResetErrorMessage = useSelector((state) => state.auth.passwordResetErrorMessage)

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        criteriaMode: "all",
    });
    const onSubmit = (data) => {
        dispatch(PasswordResetFunction(data));
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
        <main className='password-reset'>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            <div className="reset-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        loading &&
                        <div className="password-reset-loading">
                        <TailSpin stroke="#2C3244" className="loading"/>
                        </div>
                    }
                    {
                        !mailSent?
                        <>
                            <h1>Enter your email to reset your password</h1>
                            <div>
                                {passwordResetErrorMessage && <p className="error-message">{passwordResetErrorMessage}</p>}
                                <label>Email</label>
                                <input
                                    placeholder="example@example.com"
                                    {...register("emailInput", {
                                        required: "This field is required.",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Wrong email address.",
                                        },
                                    })}
                                />
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
                            </div>
                            <button className="send-btn" type="submit">Send</button>
                        </>
                        :
                        <div className="success-mail_send">
                            <MailPic/>
                            <p>Please check your email for instructions on how to reset your password. It might take a few minutes.</p>
                            <p className="send-mail-again">Didn`t receive an email? <span onClick={()=>dispatch(setMailSentStatus())}>Try again</span></p>
                        </div>
                    }
                </form>
            </div>
        </main>
    )
}

export default PasswordReset