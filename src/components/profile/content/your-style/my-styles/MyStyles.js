import {ReactComponent as Styleicon} from '../../../../../assets/images/svg-icons/clother-icon.svg'
import {ReactComponent as BodyIcon}  from '../../../../../assets/images/svg-icons/bodyIcon.svg'
import {ReactComponent as ColorIcon} from '../../../../../assets/images/svg-icons/colorIcon.svg'
import {ReactComponent as SizeIcon} from '../../../../../assets/images/svg-icons/sizeIcon.svg'
import {ReactComponent as PriceIcon} from '../../../../../assets/images/svg-icons/priceIcon.svg'
import {ReactComponent as UserIcon} from '../../../../../assets/images/svg-icons/account-icon.svg'
import {ReactComponent as ClothIcon} from '../../../../../assets/images/svg-icons/ClothIcon.svg'
import {ReactComponent as CutIcon} from '../../../../../assets/images/svg-icons/cutIcon.svg'
 
function MyStyles(){
    return (
        <div className="my-styles">
            <div className="my-styles-block">
                <div>
                    <Styleicon/>
                    <h4>Style Selections</h4>
                    <div className="my-styles-block_content">
                        <p>Style: Urban</p>
                    </div>
                </div>
                <div>
                    <BodyIcon/>
                    <h4>Body Shape</h4>
                    <div className="my-styles-block_content">
                        <p>Body Shape: Average</p>
                    </div>
                </div>
                <div>
                    <ColorIcon/>
                    <h4>Color Selections</h4>
                    <div className="my-styles-block_content">
                        <p>Liked Color Tones: Pastel</p>
                        <p>Disliked Colors: Green</p>
                    </div>
                </div>
            </div>
            <div className="my-styles-block">
                <div>
                    <SizeIcon/>
                    <h4>Size Selections</h4>
                    <div className="my-styles-block_content">
                        <p>T-shirt: M</p>
                        <p>Shirt: M</p>
                        <p>Height: 175</p>
                        <p>Sweatshirt/Sweater: M</p>
                        <p>Weight: 70</p>
                        <p>Blazer: 48</p>
                        <p>Jean: 31</p>
                        <p>Pants: 48</p>
                        <p>Shoes: 44</p>
                    </div>
                </div>
                <div>
                    <PriceIcon/>
                    <h4>Price Selections</h4>
                    <div className="my-styles-block_content">
                        <p>T-shirt: 150-250</p>
                        <p>Shirt: 250-400+</p>
                        <p>Sweatshirt/Sweater: 150-250</p>
                        <p>Jean/Pants: 200-350</p>
                        <p>Outwear: 250-400</p>
                        <p>Shoes: 250-400</p>
                        <p>Accessory: 100-200, 200</p>
                    </div>
                </div>
                <div>
                    <UserIcon/>
                    <h4>Personal Info</h4>
                    <div className="my-styles-block_content">
                        <p>Birth Date: 08/05/1995</p>
                        <p>Occupation: Athlete</p>
                        <p>Instagram Account:</p>
                        <p>Do You Have Child: Yes</p>
                        <p>Pintereset Board:</p>
                        <p>Do You Have Pet: None</p>
                        <p>Stylist Note:</p>
                    </div>
                </div>
            </div>
            <div className="my-styles-block">
                <div>
                    <ClothIcon/>
                    <h4>Clothing Selections</h4>
                    <div className="my-styles-block_content">
                        <p>Clothing Type: Daily</p>
                        <p>Disliked Collar Types: Crew neck</p>
                        <p>Disliked Patterns: Stripes</p>
                        <p>Disliked Textures: Leather</p>
                        <p>Disliked Cloth Types: T-Shirts</p>
                    </div>
                </div>
                <div>
                    <CutIcon/>
                    <h4>Fit/Cut Selections</h4>
                    <div className="my-styles-block_content">
                        <p>Top Clothing Fit: Standard</p>
                        <p>Top Clothing Length:</p>
                        <p>Bottom Clothing Cut: Straight</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default MyStyles