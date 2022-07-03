import "./Home.scss";
const Home = () => {
  return (
    <div name="home" className="home">
      {/* Container */}
      <div className="container">
        <p className="greetings">Hi, my name is</p>
        <h1 className="name">Joris LIMONIER</h1>
        <h2 className="role">Freelance Data Scientist & Python Expert</h2>
        <p className="description">
          I am a mathematician with years of experience in the field of data
          science. My expertise is in Python, but I am also fluent in Julia.
        </p>
      </div>
    </div>
  );
};

export default Home;
