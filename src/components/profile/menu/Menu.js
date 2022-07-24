import { Link, useLocation, useNavigate} from "react-router-dom";
import Data from "../../../Data/profileTabs";
import { authActions } from "../../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import stringAvatar from "../../global/materialui-avatar/Avatar";

function Menu(props) {
  const navigate = useNavigate()
  const { Logout } = authActions;
  const location = useLocation();
  let url = location.pathname.split("/").pop();

  const tabs = Data;

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const logOut = () => {
    dispatch(Logout())
    .then(
      ()=>
      navigate("/login", { replace: true })
    )
  };

  let name = user.surname + " " + user.name;

  return (
    <div
      className={
        props.show ? "profile-menu profile-menu_active" : "profile-menu"
      }
    >
      <div className="profile-menu_container">
        <div className="profile-menu_user">
          {user.image ? (
            <img className="profile-image" src={user.image} alt="profilePhoto" />
          ) : (
            <Avatar
              style={{ width: 50, height: 50, fontSize: "1.2rem" }}
              {...stringAvatar(`${name}`)}
            />
          )}
          <h4>
            <span>{user.name}</span>
            <span>{user.surname}</span>
          </h4>
        </div>
        <div className="profile-menu_tabs">
          {tabs.map((tab, index) => {
            if (tab.menu === "Exit") {
              return (
                <div
                  onClick={props.clickProfileMenu}
                  key={index}
                  className={
                    url === `${tab.menu.toLowerCase().split(" ").join("-")}`
                      ? "profile-menu-tabs_active"
                      : undefined
                  }
                >
                  {tab.svg}
                  <p onClick={logOut}>{tab.menu}</p>
                </div>
              );
            }
            return (
              <div
                onClick={props.clickProfileMenu}
                key={index}
                className={
                  url === `${tab.menu.toLowerCase().split(" ").join("-")}`
                    ? "profile-menu-tabs_active profil-menu_tab"
                    : "profil-menu_tab"
                }
              >
                {tab.svg}
                <Link
                  to={
                    `${tab.menu.toLowerCase().split(" ").join("-")}` ===
                    "profile"
                      ? "/profile"
                      : props.link
                      ? `profile/${tab.menu.toLowerCase().split(" ").join("-")}`
                      : `${tab.menu.toLowerCase().split(" ").join("-")}`
                  }
                >
                  {tab.menu}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
