import SeeMore from "../../global/see-more-button/SeeMore";
import Bicycle from '../../../assets/images/svg-icons/Group.svg'
import Frame1 from '../../../assets/images/svg-icons/frame-1.svg'
import Frame2 from '../../../assets/images/svg-icons/frame-2.svg'
import Frame3 from '../../../assets/images/svg-icons/frame-3.svg'


function FaqQuestions() {
    return (
        <div className='faq-questions'>
            <div className='faq-questions-container'>
                <div className='faq-item'>
                    <div className='image-container'>
                        <img src={Bicycle} alt="bicycleIcon"/>
                    </div>
                    <div className='info-container'>
                        <h3>Free shipping, returns & exchanges?</h3>
                        <p>Yep-shipping, returns & exchanges are always free. A prepaid return label is included with each other</p>
                        {/* <SeeMore /> */}
                    </div>
                </div>
                <div className='faq-item'>
                    <div className='image-container'>
                        <img src={Frame1} alt="icon"/>
                    </div>
                    <div className='info-container'>
                        <h3>Free shipping, returns & exchanges?</h3>
                        <p>Yep-shipping, returns & exchanges are always free. A prepaid return label is included with each other</p>
                        {/* <SeeMore /> */}
                    </div>
                </div>
                <div className='faq-item'>
                    <div className='image-container'>
                        <img src={Frame2} alt="icon"/>
                    </div>
                    <div className='info-container'>
                        <h3>Free shipping, returns & exchanges?</h3>
                        <p>Yep-shipping, returns & exchanges are always free. A prepaid return label is included with each other</p>
                        {/* <SeeMore /> */}
                    </div>
                </div>
                <div className='faq-item'>
                    <div className='image-container'>
                        <img src={Frame3} alt="icon"/>
                    </div>
                    <div className='info-container'>
                        <h3>Free shipping, returns & exchanges?</h3>
                        <p>Yep-shipping, returns & exchanges are always free. A prepaid return label is included with each other</p>
                        {/* <SeeMore /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqQuestions;