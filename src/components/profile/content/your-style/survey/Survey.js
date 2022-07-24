import {ReactComponent as ArrowIcon} from '../../../../../assets/images/svg-icons/button-arrow.svg'
function Survey (props){
    return (
        <div className="survey">
            <img src={props.image} alt="clotherImage"/>
            <div className="survey-content">
                <h5>{props.title}</h5>
                <button>
                    View more 
                    <ArrowIcon/>
                </button>
            </div>
        </div>
    )
}
export default Survey