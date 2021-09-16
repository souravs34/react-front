import React from "react";

const InterestSection = ({ image, title, text }) => {
  return (
    <div className="InterestSection">
      <div className="interest">
        <div className="interest--content">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <h5 className="i--title">{title}</h5>
          <p className="i--text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default InterestSection;
