import React from 'react';
import "../css/footer.css";

class Footer extends React.Component {
  render () {
    return(
      <div className="footerContainer">
        <div>
          <div className="footerAboutUs">About Us: </div>
          <div>We are a real estate start up, check out our hompage: <a href="http://replaylistings.com" target="_blank">{"http://replaylistings.com"}</a></div>
        </div>
      </div>
    );
  }
}

export default Footer;
