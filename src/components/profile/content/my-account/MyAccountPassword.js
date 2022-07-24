import PasswordInput from "../../../sign-in/password-input/PasswordInput";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { MyAccountActions } from "../../../../redux/actions/MyAccountActions";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { setLoadingPassword } from "../../../../redux/reducer/MyAccountReducer";
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";

function MyAccountPassword() {
  const dispatch = useDispatch();

  const { PasswordChangeFunction } = MyAccountActions;

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.myAccount.loadingPassword);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    dispatch(setLoadingPassword(true));
    document.querySelectorAll(".password-control").forEach((item) => {
      item.disabled = true;
    });
    dispatch(PasswordChangeFunction({ data, token }))
      .then(unwrapResult)
      .then(() => {
        setTimeout(() => {
          setError(false)
          dispatch(setLoadingPassword(false));
          notify();
          setShow(false);
          document.querySelectorAll(".password-control").forEach((item) => {
            item.disabled = false;
            item.value = "";
          });
        }, 500);
      })
      .catch(() => {
        setTimeout(() => {
          dispatch(setLoadingPassword(false));
          setError(true)
          document.querySelectorAll(".password-control").forEach((item) => {
            item.disabled = false;
          });
        }, 500);
      });
  };

  const showPasword = () => {
    setShow(!show);
    if(!show){
        document.querySelectorAll(".password-control").forEach((item) => {
            item.value = "";
        });
        setError(false)
    }
  };

  const cancelButton = () => {
    setShow(false);
    document.querySelectorAll(".password-control").forEach((item) => {
        item.value = "";
    });
    setError(false)
  };

  const notify = () =>
    toast.success("Password changed successfully", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="change-password">
      <p className="change-password_title" onClick={showPasword}>
        Change your password
      </p>
      <div
        className={
          show ? "change-password-section_active" : "change-password_section"
        }
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* old password */}
          <PasswordInput
            label="Old password"
            placeholder="old password"
            errorMessage={error?"Your old password was entered incorrectly":""}
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
            func={{
              ...register("passwordInput", {
                required: "This field is required.",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/i,
                  message:
                    "Please choose a stronger password. Try a mix of letters, numbers, and symbols (@$!%*?&.)",
                },
              }),
            }}
          />

          {/* new password */}
          <PasswordInput
            label="New password"
            placeholder="new password"
            error={
              <ErrorMessage
                errors={errors}
                name="newPasswordInput"
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
            func={{
              ...register("newPasswordInput", {
                required: "This field is required.",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/i,
                  message:
                    "Please choose a stronger password. Try a mix of letters, numbers, and symbols (@$!%*?&.)",
                },
              }),
            }}
          />

          {/* confirm password input */}
          <PasswordInput
            label="Confirm new password"
            placeholder="confirm new password"
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
            func={{
              ...register("confirmPasswordInput", {
                required: "This field is required.",
                validate: (val) => {
                  if (watch("newPasswordInput") !== val) {
                    return "Your passwords do no match";
                  }
                },
              }),
            }}
          />
          <div className="password_buttons">
            <button
              className="save-btn"
              type="submit"
              disabled={loading ? true : false}
            >
              Save
              {loading && (
                <div className="save-loading-div">
                  <CircularProgress />
                </div>
              )}
            </button>
            <button onClick={cancelButton} className="cancel-btn" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyAccountPassword;
