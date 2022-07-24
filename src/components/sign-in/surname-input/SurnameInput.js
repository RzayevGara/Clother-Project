function SurnameInput(props){
    return(
        <div className="sign-up_form-group">
            <label>Surname</label>
            <input disabled={props.disabled?true:false} className="input-control" placeholder={props.placeholder?props.placeholder:"Surname"} {...props.func}/>
            {props.error}
        </div>       
    )
}

export default SurnameInput