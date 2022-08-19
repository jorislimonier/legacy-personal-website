import "./Contact.scss";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <div className="contact__page__container">
        <h1 className="title">Contact</h1>
        <div className="cards__container">
          <a
            href="https://github.com/jorislimonier"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card">
              <FaGithub size={28} />
              <p className="card__title">Github</p>
            </div>
          </a>
          <a
            href="mailto:joris.limonier@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card">
              <FaEnvelope size={28} />
              <p className="card__title">Email</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/joris-limonier-a48a0213a/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card">
              <FaLinkedin size={28} />
              <p className="card__title">LinkedIn</p>
            </div>
          </a>
        </div>
        <div className="enquiries">
          <p>{t("contact_enquiries")}</p>
          <a
            href="mailto:joris.limonier@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            joris.limonier@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
