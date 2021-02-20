import React from 'react';
import instagram from "../public/icons8-instagram48.svg";
import linkedin from "../public/icons8-linkedin48.svg";
import github from "../public/icons8-github48.svg";
import './scss/main.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="footer">
        <a href="https://www.instagram.com/tmccaffrey_95/">
          <img src={instagram} alt="instagram"/>
        </a>

        <a href="https://www.linkedin.com/in/tomasmccaffrey/">
          <img src={linkedin} alt="linkedin"/>
        </a>

        <a href="https://github.com/tmccaffrey914">
          <img src={github} alt="github"/>
        </a>
      </div>
    );
  }

}

export default Footer;
