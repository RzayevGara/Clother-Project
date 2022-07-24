import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React, { useRef } from "react";
import { MyAccountActions } from "../../../../redux/actions/MyAccountActions";
import { setLoadingName } from "../../../../redux/reducer/MyAccountReducer";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import {toast } from "react-toastify";
import {setUser} from '../../../../redux/reducer/AuthReducer'


function MyAccountName(props) {
  const dispatch = useDispatch();
  const { NameChangeFunction } = MyAccountActions;
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.myAccount.loadingName);

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const buttonsRef = useRef([]);

  const editBtn = () => {
    document.querySelector(".name-control").disabled = false;
    setValue("nameInput", document.querySelector(".name-control").placeholder);
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
    document.querySelector(".name-control").disabled = true;
    document.querySelector(".name-control").value = props.placeholder;
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

  const nameSubmit = (data) => {
    dispatch(setLoadingName(true));
    document.querySelector(".name-control").disabled = true;
    dispatch(NameChangeFunction({ name: data.nameInput, token }))
      .then(({ payload }) => {
        setTimeout(() => {
          let newUser = {...props.user}
          newUser["name"] = payload.data.name
          dispatch(setUser(newUser))
          document.querySelector(".name-control").disabled = true;
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
          dispatch(setLoadingName(false));
          notify();
        }, 500);
      })
      .catch(() => {
        document.querySelector(".name-control").disabled = false;
        dispatch(setLoadingName(false));
        notifyError();
      });
  };

  const notify = () =>
    toast.success("Name changed successfully", {
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
    <form onSubmit={handleSubmit(nameSubmit)}>
      <div className="form-group-my_account">
        <label>Name</label>
        <input
          disabled
          className="name-control"
          placeholder={props.user ? props.user.name : "Name"}
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
          render={({ message }) => <p className="error-message">{message}</p>}
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

export default MyAccountName;
