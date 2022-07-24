import { ReactComponent as PhoneIcon } from "../../../assets/images/svg-icons/phone.svg";
import { ReactComponent as EmailIcon } from "../../../assets/images/svg-icons/email.svg";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import client from "../../../client/client";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";

function Subscription() {
  const [loading, setLoading] = useState(false);

  const notify = () =>
    toast.success("You successfully subscribed", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => {
    setLoading(true);
    client
      .post("core/subscription/", {
        email: data.emailInput,
        full_name: data.nameInput,
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          notify();
          document.querySelectorAll(".subscription-input").forEach((element)=>{
            element.value = ""
          })
        }, 600);
      });
  };

  return (
    <div className="subscription">
      <h2>Get the last news</h2>
      <div className="subscription-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Name, Surname</label>
            <input
              type="text"
              placeholder="Joe Dohn"
              className="subscription-input"
              {...register("nameInput", {
                required: "This field is required.",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 letters.",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="nameInput"
              render={({ message }) => (
                <p className="error-message">{message}</p>
              )}
            />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input
              className="subscription-input"
              type="email"
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
          <button
            className="subscription-btn"
            type="submit"
            disabled={loading ? true : false}
          >
            Subscription
            {loading && (
              <div className="subscription-loading-div">
                <CircularProgress />
              </div>
            )}
          </button>
        </form>
        <div className="subscription-contact">
          <div>
            <PhoneIcon />
            <p>+994508537021</p>
          </div>
          <div>
            <EmailIcon />
            <p>clother.lab@gmail.com</p>
          </div>
        </div>
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

export default Subscription;
