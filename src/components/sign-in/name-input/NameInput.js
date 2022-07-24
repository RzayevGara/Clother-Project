function NameInput(props){
    return(
        <div className="sign-up_form-group">
            <label>Name</label>
            <input disabled={props.disabled?true:false} className="name-control" placeholder={props.placeholder?props.placeholder:"Name"} {...props.func}/>
            {props.error}
        </div>       
    )
}

export default NameInput