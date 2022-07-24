import Swiper from './swiper/Swiper'
import ShopCard from './shop-card/ShopCard'
import InviteCard from './invite-card/InviteCard'

function NewCustomers(){
    return (
        <div className="new-customers">
            <Swiper/>
            <ShopCard/>
            <InviteCard/>
        </div>
    )
}

export default NewCustomers