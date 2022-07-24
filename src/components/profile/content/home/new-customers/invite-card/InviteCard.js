import FriendsImage from '../../../../../../assets/images/picture/FriendsImage.png'
import {isMobile} from 'react-device-detect';
import WhatsappIcon from '../../../../../../assets/images/svg-icons/WhatsApp.svg'
import TelegramIcon from '../../../../../../assets/images/svg-icons/Telegram_logo.svg'
function InviteCard (){
    return (
        <div className="invite-card">
            <div className="invite-card_container">
                <img className="invite-card-image" src={FriendsImage} alt="friendsImage"/>
                <div className="invite-card_button">
                    <h4>Invite your friend</h4>
                    <div className="invite-card_buttons">
                        <a href={isMobile?"whatsapp://send?text=https://clother.store":"https://web.whatsapp.com/send?text=https://clother.store"} target="_blank" rel="noreferrer" data-action="share/whatsapp/share">
                            <img className="whatsapp-icon" src={WhatsappIcon} alt="whatsappIcon"/>
                        </a>
                        <a href={isMobile?"tg://msg_url?url=https://clother.store":"https://t.me/share/url?url=https://clother.store"} target="_blank" rel="noreferrer" data-action="share/whatsapp/share">
                            <img className="telegram-icon" src={TelegramIcon} alt="whatsappIcon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InviteCard