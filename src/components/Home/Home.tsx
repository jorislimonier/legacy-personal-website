import { useTranslation } from "react-i18next";

import "./Home.scss";

const Home = () => {
  const { t } = useTranslation();

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
          <h2 className="role">{t("role1")}</h2>
          <h2 className="role">{t("role2")}</h2>

          {/* Services */}
        </div>
        <div className="services-wrapper">
          <div className="service-card">
            <h2 className="service-title">Machine Learning</h2>
            <p className="service-description">
              <strong>Machine Learning</strong> and{" "}
              <strong>Deep Learning</strong> create value for businesses, making
              them a must-have for competitive companies.
              <br />
              <br />I use the most powerful tools on the market to turn your
              data into strategic advice and{" "}
              <strong>take your business to the next level</strong>.
              <br />
              <br />I make my Machine Learning models{" "}
              <strong>easy to work with</strong> by incorporating them in a
              user-friendly interface with Python Dash.
            </p>
          </div>
          <div className="service-card">
            <h2 className="service-title">Python</h2>
          </div>
          <div className="service-card">
            <h2 className="service-title">Data Science Training</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
