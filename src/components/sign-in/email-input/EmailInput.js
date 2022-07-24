function EmailInput(props) {
  return (
    <div className="sign-up_form-group">
      {props.errorMessage && <p className="error-message">{props.errorMessage}</p>}
      <label>Email</label>
      <input disabled={props.disabled?true:false} className="input-control" placeholder={props.placeholder?props.placeholder:"example@example.com"} {...props.func} />
      {props.error}
    </div>
  );
}

export default EmailInput;
