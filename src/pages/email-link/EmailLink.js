import PasswordInput from "../../components/sign-in/password-input/PasswordInput"
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";
import {authActions} from '../../redux/actions/AuthActions'
import { useDispatch, useSelector} from "react-redux";
import { TailSpin } from "react-loading-icons";
import { Helmet } from "react-helmet";
import React, {useEffect} from 'react'

function EmailLink() {
    const {ConfirmPasswordResetFunction}  = authActions
    const dispatch = useDispatch();
    const {uid, token} = useParams();
    const loading = useSelector((state) => state.auth.loading)
    const passwordChange = useSelector((state) => state.auth.passwordChange)

    useEffect(() => {
        const changePage = () => {
          window.scrollTo({top: 0});
        };
        changePage()
      }, []);
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
    } = useForm({
        criteriaMode: "all",
    });
    const onSubmit = (data) => {
        dispatch(ConfirmPasswordResetFunction({data, uid, token}))
    };

    return (
        <main className='email-link'>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            <div className="email-link-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        loading &&
                        <div className="email-link-loading">
                        <TailSpin stroke="#2C3244" className="loading"/>
                        </div>
                    }
                    {
                        !passwordChange?
                        <>
                            <h1>Reset your password</h1>
                            <div>
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
                                        {
                                            ...register("passwordInput", {
                                                required: "This field is required.",
                                                pattern: {
                                                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/i,
                                                    message: "Please choose a stronger password. Try a mix of letters, numbers, and symbols (@$!%*?&.)",
                                                },
                                            })
                                        }
                                    }
                                />
                            </div>
                            <div>
                                <PasswordInput
                                    label="Confirm Password"
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
                                        {
                                            ...register("confirmPasswordInput", {
                                                required: "This field is required.",
                                                validate: (val) => {
                                                    if (watch('passwordInput') !== val) {
                                                        return "Your passwords do no match";
                                                    }
                                                },
                                            })
                                        }
                                    }
                                />
                            </div>
                            <button className="reset-password-btn" type="submit">Reset Password</button>
                        </>
                        : 
                        <div className="success-password-change">
                            <p>Password changed successfully.</p>
                            <Link className="navigate-login-btn" type=""to="/login">Login</Link>
                        </div>
                    }
                </form>
            </div>
        </main>
    )
}

export default EmailLink


          