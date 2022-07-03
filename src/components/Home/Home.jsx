import "./Home.scss";
const Home = () => {
  return (
    <div name="home" className="home">
      {/* Container */}
      <div className="homepage-container">
        <div className="header-container">
            <img className="hero-img"
              src="https://imgs.search.brave.com/39jqqD_29nL6axR6iW9CKmT5MhZ8e1eR3izBua7nAfQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YW5kcGx1cy5jb20v/aHViZnMvc2h1dHRl/cnN0b2NrXzU2MTkz/MTcwMi5qcGcja2Vl/cFByb3RvY29s"
              alt=""
            ></img>
          <h1 className="name">Joris LIMONIER</h1>
          <h2 className="role">
            Freelance Data Scientist
            <br />
            Python & Machine Learning Expert
          </h2>
          {/* <p className="description">
            I am a mathematician with years of experience in the field of data
            science. My expertise is in Python, but I am also fluent in Julia.
          </p> */}
          {/* <button>Hire me</button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
