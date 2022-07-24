import React, {useState} from "react"
import {ReactComponent as PasswordHide} from '../../../assets/images/svg-icons/password-hide.svg'
import {ReactComponent as PasswordShow} from '../../../assets/images/svg-icons/password-show.svg'
import {Link} from 'react-router-dom'

function PasswordInput(props) {
    const [passwordType, setPasswordType] = useState("password")

  const togglePassword = ()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }

  return (
    <div className="form-password sign-up_form-group">
      <label>{props.label}</label>
      <div>
        <input className="password-control" type={passwordType} placeholder={props.placeholder} {...props.func}/>
        <button type="button" onClick={togglePassword}>
          {passwordType === "password" ? <PasswordHide /> : <PasswordShow />}
        </button>
      </div>
      {props.errorMessage && 
      <p className="error-message">{props.errorMessage}</p>
      }
      {
        props.forgotPassword &&
        <p className="forgot-password">
          Forgot your password? <Link to="/password/reset">Reset it now</Link>
        </p>
      }
      {props.error}
    </div>
  );
}

export default PasswordInput;
