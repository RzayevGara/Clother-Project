import {ReactComponent as HomeIcon} from '../assets/images/svg-icons/home-icon.svg'
import {ReactComponent as AccountIcon} from '../assets/images/svg-icons/account-icon.svg'
import {ReactComponent as StyleIcon} from '../assets/images/svg-icons/clother-icon.svg'
import {ReactComponent as BagIcon} from '../assets/images/svg-icons/bag-icon.svg'
import {ReactComponent as PaymentIcon} from '../assets/images/svg-icons/payment-icon.svg'
import  {ReactComponent as LogoutIcon} from '../assets/images/svg-icons/log-out-icon.svg'

const data = [
    {
        svg: <HomeIcon/>,
        menu: "Profile",
    },
    {
        svg: <AccountIcon/>,
        menu: "My Account"
    },
    {
        svg: <StyleIcon/>,
        menu: "Your style"
    },
    {
        svg: <BagIcon/>,
        menu: "Orders"
    },
    {
        svg: <PaymentIcon/>,
        menu: "Payments"
    },
    {
        svg: <LogoutIcon/>,
        menu: "Exit"
    },
]

export default data