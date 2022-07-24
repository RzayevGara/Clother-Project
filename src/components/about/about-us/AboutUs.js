import TitleImage from "../../../assets/images/picture/about-title-image.png";

function AboutUs() {
  return (
    <div className="about-us">
      <img className="about-us_image" src={TitleImage} alt="titleImage" />
      <div className="about-us_container">
        <h1>About us</h1>
        <p>
          Clother is an Azerbaijani online personal styling service. We provide
          the best fit clothes for our consumers by applying recommendation
          algorithms and data science tools, as well as professional stylist
          advice. The best-fitting clothing are then delivered to buyers in
          in-demand boxes, where they may try them on before buying them and
          return the ones they do not buy.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
