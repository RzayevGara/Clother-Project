import React, { useState } from "react";
import ClotherLogo from "../../../assets/images/svg-icons/clother-logo.svg";
import UserIcon from "../../../assets/images/svg-icons/User_cicrle_light.svg";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "../../profile/menu/Menu";
import Avatar from '@mui/material/Avatar'
import stringAvatar from '../../global/materialui-avatar/Avatar'
import Loading from '../../quiz/loading/Loading'

function Header() {
  const [active, setActive] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const loading =useSelector((state) => state.quiz.loading)
  const location = useLocation()
  let url = location.pathname.split('/').pop();

  const hamburgerClick = () => {
    setActive(!active);
  };

  const clickMenu = () => {
    setActive(false);
  };

  const clickProfileMenu = () => {
    setShowProfile(false);
  };

  const profileClick = () => {
    setShowProfile(!showProfile);
  };

  const token = useSelector((state) => state.auth.token);

  const user = useSelector((state) => state.auth.user);

  let name =  user.surname+ " " + user.name;

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <div
            onClick={hamburgerClick}
            className={
              active ? "hamburger-btn hamburder-active" : "hamburger-btn"
            }
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Link className="header-logo-link" to="/">
            <img className="header-logo" src={ClotherLogo} alt="logo" />
          </Link>
        </div>
        <div className={active ? "header-center nav-active" : "header-center"}>
          <ul className="nav-list">
            <li onClick={clickMenu}>
              <Link className={url===""?"active-menu": undefined} to="/">Home</Link>
            </li>
            <li onClick={clickMenu}>
              <Link className={url==="about"?"active-menu": undefined} to="/about">About us</Link>
            </li>
            {/* <li onClick={clickMenu}>
              <Link className={url==="men"?"active-menu": undefined} to="/">Men</Link>
            </li> */}
            {/* <li onClick={clickMenu}>
              <Link className={url==="women"?"active-menu": undefined} to="/">Women</Link>
            </li> */}
            <li onClick={clickMenu}>
              <Link className={url==="faq"?"active-menu": undefined} to="/faq">FAQ</Link>
            </li>
            {/* {!token && (
              <button onClick={clickMenu}>
                <Link to="/login">
                  <img src={UserIcon} alt="userIcon" />
                  Log in
                </Link>
              </button>
            )} */}
          </ul>
        </div>
        <div className="header-right">
          <div className="header-login">
            {token ? (
              <button className="btn-profile"onClick={profileClick}>
                {user.name && <span>{user.name}</span>}
                {
                    user.image?
                    <img className="profile-image" src={user.image} alt="profilePhoto"/>
                    :
                 <Avatar style={{ width: 37, height: 37, fontSize: "1rem" }} {...stringAvatar(`${name}`)} />
                }
              </button>
            ) : (
              <button className="btn-login">
                <Link to="/login">
                  <img src={UserIcon} alt="userIcon" />
                  Log in
                </Link>
              </button>
            )}
            {/* <select>
              <option>EN</option>
              <option>AZ</option>
              <option>RU</option>
            </select> */}
          </div>
        </div>
        <Menu
          clickProfileMenu={clickProfileMenu}
          link="profile"
          show={showProfile}
        />
      </div>
      {
            loading &&
            <Loading/>
          }
    </header>
  );
}

export default Header;
