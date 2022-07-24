import {ReactComponent as PlusIcon} from '../../../../assets/images/svg-icons/plusIcon.svg'
import Jeans from '../../../../assets/images/picture/Jeans.png'
import Dresses from '../../../../assets/images/picture/Dresses.png'
import Tops from '../../../../assets/images/picture/Tops.png'
import Survey from './survey/Survey'
import MyStyles from './my-styles/MyStyles'
import {Link} from 'react-router-dom'

function YourStyle(){
    return (
        <div className="your-style">
            <div className="your-style_container">
                <Link to="/quiz" className="update-style-btn">
                    <PlusIcon/>
                    Update your style
                </Link>
                <div className="your-style_surveys">
                    <h3>New surveys</h3>
                    <div className="surveys-container">
                        <Survey image={Jeans} title={"Jeans"}/>
                        <Survey image={Dresses} title={"Dresses"}/>
                        <Survey image={Tops} title={"Tops"}/>
                    </div>
                </div>
                <MyStyles/>
            </div>
        </div>
    )
}

export default YourStyle