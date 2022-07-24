import Avatar from "@mui/material/Avatar";
import stringAvatar from "../../../global/materialui-avatar/Avatar";
import React, { useRef, useState } from "react";
import { MyAccountActions } from "../../../../redux/actions/MyAccountActions";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../../redux/reducer/AuthReducer";
import CircularProgress from "@mui/material/CircularProgress";
import {toast } from "react-toastify";
import { setLoadingImage } from "../../../../redux/reducer/MyAccountReducer";

function MyAccountImage(props) {
  const dispatch = useDispatch();
  const { ImageChangeFunction } = MyAccountActions;
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.myAccount.loadingImage);

  const [file, setFile] = useState(null);
  const [base64URL, setBase64URL] = useState("");

  const hiddenFileInput = useRef(null);

  let name = props.user?.surname + " " + props.user?.name;

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file.size < 1000000) {
      getBase64(file)
        .then((result) => {
          file["base64"] = result;
          setBase64URL(result);
          setFile(file);
          document.querySelector(".image-buttons").style.display = "flex";
          document.querySelector(".change-btn").style.display = "none";
        })
        .catch((err) => {
          console.log(err);
        });
      setFile(e.target.files[0]);
    } else {
      alert("Please choose image less than 1mb.");
    }
  };

  const saveImage = () => {
    dispatch(setLoadingImage(true));
    let form_data = new FormData();
    form_data.append("image", file);
    dispatch(ImageChangeFunction({ form_data, token })).then(({ payload }) => {
      setTimeout(() => {
        let newUser = { ...user };
        newUser["image"] = payload.data.image;
        dispatch(setUser(newUser));
        document.querySelector(".image-buttons").style.display = "none";
        document.querySelector(".change-btn").style.display = "block";
        dispatch(setLoadingImage(false));
        notify();
      }, 500);
    });
  };

  const cancelImage = () => {
    setBase64URL("");
    document.querySelector(".image-buttons").style.display = "none";
    document.querySelector(".change-btn").style.display = "block";
  };

  const notify = () =>
    toast.success("Profile picture changed successfully", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="group avatar-container">
      <div className="profile-menu-user">
        {base64URL ? (
          <img className="profile-image" src={base64URL} alt="profilePhoto" />
        ) : props.user.image ? (
          <img
            className="profile-image"
            src={props.user.image}
            alt="profilePhoto"
          />
        ) : (
          <Avatar
            style={{ width: 128, height: 128, fontSize: "2rem" }}
            {...stringAvatar(`${name}`)}
          />
        )}
        <span className="change-btn" onClick={handleClick}>
          Change Photo
        </span>
        <div className="image-buttons">
          <button
            onClick={saveImage}
            className="save-btn"
            disabled={loading ? true : false}
          >
            Save
            {loading && (
              <div className="save-loading-div">
                <CircularProgress />
              </div>
            )}
          </button>
          <button onClick={cancelImage} className="cancel-btn">
            Cancel
          </button>
        </div>
        <input
          onChange={handleChange}
          ref={hiddenFileInput}
          type="file"
          name="file"
          style={{ display: "none" }}
          accept="image/png, image/jpeg, image/jpg"
          max-file-size="1024"
        />
      </div>
    </div>
  );
}

export default MyAccountImage;
