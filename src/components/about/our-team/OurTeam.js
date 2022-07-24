import ElizabethImage from "../../../assets/images/picture/Elizabeth-image.png";
import ScottImage from "../../../assets/images/picture/scott-image.png";
import DanImage from "../../../assets/images/picture/Dan-image.png";

function OurTeam() {
  return (
    <div className="our-team">
      <div className="our-team_container">
        <div>
          <img src={ElizabethImage} alt="teamPicture" />
          <h4>Elizabeth Spaulding</h4>
          <p>Chief Executive Officer</p>
          <p className="person-info">
            Elizabeth Spaulding is driving the next phase of the company`s
            growth as CEO
          </p>
        </div>
        <div>
          <img src={ScottImage} alt="teamPicture" />
          <h4>Scott Darling</h4>
          <p>Chief Legal Officer</p>
          <p className="person-info">Scott is responsible for the company`s legal affairs.</p>
        </div>
        <div>
          <img src={DanImage} alt="teamPicture" />
          <h4>Dan Jedda</h4>
          <p>Chief Financial Officer</p>
          <p className="person-info">
            Dan Jedda leads the Finance team, and is deeply involved in
            expanding the growth opportunities ahead for the business.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurTeam