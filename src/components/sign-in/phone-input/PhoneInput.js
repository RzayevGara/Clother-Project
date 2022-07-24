import InputMask from "react-input-mask";


function PhoneInput(props){
    return(
        <div className="sign-up_form-group">
            <label>Phone Number</label>
            <InputMask
                mask="999 999 99 99"
                maskChar={null}
                placeholder={props.placeholder?props.placeholder:"050 000 00 00"}
                {...props.func}
                className="input-control"
                disabled={props.disabled?true:false}
            />
            {props.error}
        </div>       
    )
}

export default PhoneInput