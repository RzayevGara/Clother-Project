import MissionImage from "../../../assets/images/picture/about-women-image.png";
import { ReactComponent as LampIcon } from "../../../assets/images/svg-icons/lamp-icon.svg";
import { ReactComponent as BagIcon } from "../../../assets/images/svg-icons/bag-icon.svg";
import { ReactComponent as ClotherIcon } from "../../../assets/images/svg-icons/clother-icon.svg";

function OurMission() {
  return (
    <div className="our-mission">
      <div className="our-mission_container">
        <img
          className="our-mission-image"
          src={MissionImage}
          alt="womenImage"
        />
        <div className="our-mission_content">
          <div>
            <h3>
              <LampIcon />
              What We Stand For
            </h3>
            <p>
              It`s our mission to change the way people find clothes they love
              by combining technology with the personal touch of seasoned style
              experts. The Clother experience is not merely curated—it`s truly
              personalized to you. We`re here to help you save time, look great
              and evolve your personal style over time.
            </p>
          </div>
          <div>
            <h3>
              <BagIcon />
              How We Got Here
            </h3>
            <p>
              Founder Katrina Lake created Clother to blend the human element of
              personal styling with high-quality clothing and proprietary
              algorithms. She shipped the first Clother order out of her
              Cambridge apartment in 2011 while attending Harvard, and today the
              company has brought the exclusive shopping experience to millions
              of men and women nationwide. In 2016, we launched men`s, and
              extended our women`s offerings to include plus sizes in 2017.
            </p>
          </div>
          <div>
            <h3>
              <ClotherIcon />
              Our Stylists
            </h3>
            <p>
              We`re proud to work with thousands of passionate Stylists from all
              over the U.S. They`re trendsetters and fashion experts who are
              motivated to learn about your style and evolving needs, in order
              to find the perfect pieces for you. Your Style Profile answers and
              continued feedback powers the engine of the Clother experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
