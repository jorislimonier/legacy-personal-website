import "./Contact.scss";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__page__container">
        <h1 className="title">Contact</h1>
        <div className="cards__container">
          <a href="https://github.com" target="_blank" >
            <div className="card">
              <FaGithub />
              <p className="card__title">Github</p>
            </div>
          </a>
          <a href="mailto:joris.limonier@gmail.com" target="_blank">
            <div className="card">
              <FaEnvelope />
              <p className="card__title">Email</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
