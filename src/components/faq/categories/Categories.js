import Truck from '../../../assets/images/svg-icons/truck-line.svg'
import Shirt from '../../../assets/images/svg-icons/t-shirt-line.svg'
import ArrowGoBack from '../../../assets/images/svg-icons/arrow-go-back-line.svg'
import Settings from '../../../assets/images/svg-icons/settings-3-line.svg'


function Categories() {
    return (
        <div className='categories'>
            <div className='categories-container'>
                <div className="category active">
                    <img src={Truck} alt="icon"/>
                    <p>Delivery</p>
                </div>
                <div className="category">
                    <img src={Shirt} alt="icon"/>
                    <p>Product</p>
                </div>
                <div className="category">
                    <img src={ArrowGoBack} alt="icon"/>
                    <p>Refunds</p>
                </div>
                <div className="category">
                    <img src={Settings} alt="icon"/>
                    <p>Technical</p>
                </div>
            </div>
        </div>
    )
}

export default Categories;
