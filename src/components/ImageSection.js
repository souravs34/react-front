import React from "react";
import about from "../img/aboutself.png";

const ImageSection = () => {
  return (
    <div className="image--section">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about--info">
        <h4>
          I am <span>Sourav Borate</span>
        </h4>
        <p className="about--text">
          {/* Hardworking College Student seeking real world experience in full
          stack development. Bringing forth a motivated attitude and a variety
          of powerful skills. Adept in various skills in html,css, react ,
          nodejs required for frontend and backend development. Committed to
          utilizing my skills to further the mission of a company. */}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
        </p>
        <div className="about--details">
          <div className="left--section">
            <p>Full Name</p>
            <p>Age</p>
            <p>College</p>
          </div>
          <div className="right--section">
            <p>: Sourav Borate</p>
            <p>: 21</p>
            <p>: PICT</p>
          </div>
        </div>
        <button className="btn">Download Cv</button>
      </div>
    </div>
  );
};

export default ImageSection;
