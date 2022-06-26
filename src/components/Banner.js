import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "Zubair Here!",
    text:
      "A professional web developer with long time experience in this field​",
    image: "/images/man-0.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li>
                  <li>
                    <FaTwitter className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="/" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
             <img src={state.image} alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
