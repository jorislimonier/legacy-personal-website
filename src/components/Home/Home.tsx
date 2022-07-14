import { useTranslation, Trans } from "react-i18next";
import "./Home.scss";

const Home = () => {
  const { t } = useTranslation();
  const idMountain = require("../../assets/id_mountain.jpg");

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
        <div className="services">
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

        {/* About me  */}
        <div className="about-me">
          <img src={idMountain} alt="" className="about-me-image" />
          <div className="about-me-text-container">
            <h1 className="about-me-title">About me</h1>
            <p className="about-me-text">
              I am a <strong>Data Scientist</strong> with a strong background in{" "}
              Mathematics, especially in Statistics.
              <br />
              <br />I acquired <strong>theoretical experience</strong> while
              getting my Bachelor's in Mathematics and Master's in Artificial
              Intelligence.
              <br />
              <br />I acquired <strong>practical experience</strong> while
              working as a Data Analyst with independent customers, academic
              researchers and established companies.
              <br />
              <br />I have assisted customers with each step of the data
              workflow:
            </p>
            <ul>
              <li>
                <strong>Data Acquisition & Cleaning</strong>
              </li>
              <li>
                <strong>Data exploration & Visualization</strong>, including
                interactive dashboards
              </li>
              <li>
                <strong>Machine Learning Modelisation & Serialization</strong>
              </li>
            </ul>
            <p className="about-me-text">
              My previous customers noted my ability to work efficiently,
              independentely as well as collaboratively. My priority is always
              to meet your requirements, while maintaining a heavy
              collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
