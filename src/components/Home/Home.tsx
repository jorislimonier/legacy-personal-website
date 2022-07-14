import { Trans } from "react-i18next";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* Container */}
      <div className="homepage-container">
        {/* Header */}
        <div className="header-container">
          <img
            className="hero-img"
            src="https://imgs.search.brave.com/39jqqD_29nL6axR6iW9CKmT5MhZ8e1eR3izBua7nAfQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YW5kcGx1cy5jb20v/aHViZnMvc2h1dHRl/cnN0b2NrXzU2MTkz/MTcwMi5qcGcja2Vl/cFByb3RvY29s"
            alt=""
          ></img>
          <h1 className="name">Joris LIMONIER</h1>
          <h2 className="role">
            <Trans>role</Trans>
          </h2>

          {/* Services */}
        </div>
        <div className="services-wrapper">
          <div className="service-card">
            <h2 className="service-title">Machine Learning</h2>
            <p className="service-description">
              <Trans>services-ml</Trans>
            </p>
          </div>
          <div className="service-card">
            <h2 className="service-title">Python</h2>
            <p className="service-description">
              <Trans>services-python</Trans>
            </p>
          </div>
          <div className="service-card">
            <h2 className="service-title">Data Science Training</h2>
            <p className="service-description">
              <Trans>services-ds</Trans>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
