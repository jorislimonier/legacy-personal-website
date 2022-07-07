import "./Contact.scss";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__page__container">
        <h1 className="title">Contact</h1>
        <ul className="contact__menu">
          <li className="contact__menu__item">
            <FaGithub /> Github
          </li>
        </ul>
        {/* <div className="">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Contact
            </p>
            <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
              <div>
                <p>
                  Hi, I'm Joris, nice to meet you. Please take a look around.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
