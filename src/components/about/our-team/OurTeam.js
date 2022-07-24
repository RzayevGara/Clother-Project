import FarhadImage from "../../../assets/images/picture/farhad.jpeg";
import HuseynImage from "../../../assets/images/picture/huseyn.jpeg";
import AyselImage from "../../../assets/images/picture/aysel.jpeg";

function OurTeam() {
  return (
    <div className="our-team">
      <div className="our-team_container">
        <div>
          <img src={AyselImage} alt="teamPicture" />
          <h4>Aysel Sadigova</h4>
          <p>Chief Marketing Officer</p>
          {/* <p className="person-info">
            Elizabeth Spaulding is driving the next phase of the company`s
            growth as CEO
          </p> */}
        </div>
        <div>
          <img src={HuseynImage} alt="teamPicture" />
          <h4>Huseyn Abizadeh</h4>
          <p>Chief Executive  Officer</p>
          {/* <p className="person-info">Scott is responsible for the company`s legal affairs.</p> */}
        </div>
        <div>
          <img src={FarhadImage} alt="teamPicture" />
          <h4>Farhad Aghayev</h4>
          <p>Chief Technology Officer</p>
          {/* <p className="person-info">
            Dan Jedda leads the Finance team, and is deeply involved in
            expanding the growth opportunities ahead for the business.
          </p> */}
        </div>
      </div>
    </div>
  );
}
export default OurTeam;
