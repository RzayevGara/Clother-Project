import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React, { useRef } from "react";
import { MyAccountActions } from "../../../../redux/actions/MyAccountActions";
import { setLoadingPhone } from "../../../../redux/reducer/MyAccountReducer";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import {toast } from "react-toastify";
import {setUser} from '../../../../redux/reducer/AuthReducer'

function MyAccountPhone(props) {
  const dispatch = useDispatch();
  const { PhoneChangeFunction } = MyAccountActions;
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.myAccount.loadingPhone);

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit
  } = useForm({
    criteriaMode: "all",
  });

  const buttonsRef = useRef([]);

  const editBtn = () => {
    document.querySelector(".phone-control").disabled = false;
    setValue("phoneInput", document.querySelector(".phone-control").placeholder);
    buttonsRef.current.forEach((button, index) => {
      switch (index) {
        case 0:
          button.style.display = "none";
          break;
        case 1:
          button.style.display = "flex";
          button.style.justifyContent = "center";
          button.style.alignItems = "center";
          break;
        case 2:
          button.style.display = "flex";
          break;
        default:
          break;
      }
    });
  };

  
  const cancelBtn = () => {
    document.querySelector(".phone-control").disabled = true;
    document.querySelector(".phone-control").value = props.placeholder;
    buttonsRef.current.forEach((button, index) => {
      switch (index) {
        case 0:
          button.style.display = "flex";
          break;
        case 1:
          button.style.display = "none";
          break;
        case 2:
          button.style.display = "none";
          break;
        default:
          break;
      }
    });
  };

  const phoneSubmit = (data) => {
    dispatch(setLoadingPhone(true));
    document.querySelector(".phone-control").disabled = true;
      dispatch(PhoneChangeFunction({ phone: data.phoneInput, token }))
      .then(({ payload }) => {
        setTimeout(() => {
          let newUser = {...props.user}
          newUser["phone_number"] = payload.data.phone_number
          dispatch(setUser(newUser))
          document.querySelector(".phone-control").disabled = true;
          buttonsRef.current.forEach((button, index) => {
            switch (index) {
              case 0:
                button.style.display = "flex";
                break;
              case 1:
                button.style.display = "none";
                break;
              case 2:
                button.style.display = "none";
                break;
              default:
                break;
            }
          });
          dispatch(setLoadingPhone(false));
          notify();
        }, 500);
      })
      .catch(() => {
        document.querySelector(".phone-control").disabled = false;
        dispatch(setLoadingPhone(false));
        notifyError();
      });
  }

  const notify = () =>
  toast.success("Phone number changed successfully", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const notifyError = () =>
  toast.error("An error occurred in the system", {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <form onSubmit={handleSubmit(phoneSubmit)}>
      <div className="form-group-my_account">
        <label>Phone Number</label>
        <input
          placeholder={props.user ? props.user.phone_number : "050 000 00 00"}
          {...register("phoneInput", {
            required: "This field is required.",
            pattern: {
              value: /^[\d ]*$/i,
              message: "Wrong phone number.",
            },
            minLength:{
              value: 10,
              message: "Please enter a valid phone number.",
            }
          })}
          className="phone-control"
          disabled
        />
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
        <div className="form-group_buttons">
          <button
            type="button"
            className="update-btn"
            ref={(element) => {
              buttonsRef.current[0] = element;
            }}
            onClick={editBtn}
          >
            Update
          </button>
          <button
            disabled={loading ? true : false}
            type="submit"
            className="save-btn"
            ref={(element) => {
              buttonsRef.current[1] = element;
            }}
          >
            Save
            {loading && (
              <div className="save-loading-div">
                <CircularProgress />
              </div>
            )}
          </button>
          <button
            type="button"
            className="cancel-btn"
            ref={(element) => {
              buttonsRef.current[2] = element;
            }}
            onClick={cancelBtn}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default MyAccountPhone;
