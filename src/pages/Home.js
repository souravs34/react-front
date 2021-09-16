import React from "react";

const Home = () => {
  return (
    <div className="home--page">
      <div className="hero">
        <h1 className="hero--text">
          Hi, i am <span> Sourav Borate</span>
        </h1>
        <p className="home--sub--text">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <div className="icons">
          <a
            className="icon--holder"
            href="https://www.linkedin.com/in/sourav-borate-bb25831b2/"
            target="_blank"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            className="icon--holder"
            target="_blank"
            href="https://github.com/souravs34"
          >
            <i class="fab fa-github"></i>
          </a>
          <a className="icon--holder" href="#" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
