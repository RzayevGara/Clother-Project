import SeeMoreBtn from '../../global/see-more-button/SeeMore'

function About(){
    return(
        <div className="home-about">
            <div className="home-about-container">
                <h2>About us</h2>
                <p>Clother is an Azerbaijani online personal styling service. We provide the best fit clothes for our consumers by applying recommendation algorithms and data science tools, as well as professional stylist advice.</p>
                <SeeMoreBtn link="/about"/>
            </div>
        </div>
    )
}

export default About