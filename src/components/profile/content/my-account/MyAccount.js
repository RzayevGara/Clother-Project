import MyAccountName from "./MyAccountName";
import MyAccountSurname from "./MyAccountSurname";
import MyAccountPhone from "./MyAccountPhone";
import MyAccountImage from './MyAccountImage'
import MyAccountPassword from "./MyAccountPassword";
import { useSelector } from "react-redux";
import { TailSpin } from "react-loading-icons";
import { ToastContainer} from "react-toastify";

const MyAccount = () => {
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.myAccountLoading)


  return (
    <div className="my-account">
      <div className="my-account-container">
      {
          loading &&
          <div className="myaccount-menu-loading">
            <div className="myaccount-menu-loading_container">
              <TailSpin stroke="#2C3244" className="loading"/>
              <p>User info loading</p>
            </div>
          </div>
      }
      {
        Object.keys(user).length>0 &&
        <>
          <h1>Personal Information</h1>
          <div className="form-group">
            {/* profile picture  */}
            <MyAccountImage user={user}/>

            <div className="group">
              {/* name input */}
              <MyAccountName user={user} />

              {/* surname input */}
              <MyAccountSurname user={user} />
            </div>
            <div className="group">
              {/* email input */}

              <form>
                <div className="form-group-my_account">
                  <label>Email</label>
                  <input disabled placeholder={user.email} />
                </div>
              </form>

              {/* phone input */}
              <MyAccountPhone user={user} />
            </div>
            <MyAccountPassword/>
          </div>
        </>
      }
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
};

export default MyAccount;
