import React from "react"
import Fade from "react-reveal/Fade"
import data from "../information"
import Lottie from "react-lottie"
// import TypeWriterEffect from 'react-typewriter-effect'

/*
          <TypeWriterEffect
            textStyle={{ 
              fontFamily: 'Helvetica',
              fontSize: '1.1em',
              marginBottom: '20px'}}
            startDelay={2000}
            cursorColor="white"
            multiText={[
              "Hi, I'm Jenish 👋",
              "3rd year CS @ University of Waterloo.",
              "Passionate coder looking to explore and learn new concepts."
            ]}
            typeSpeed={15}
            scrollArea={scroll_able}
          />
*/

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import ResumeIcon from '@mui/icons-material/Description';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import { IconButton } from "@material-ui/core";

const Header = ({LottieAnimation}) => {
  const defaultsettings = {
    loop: true,
    autoplay: true,
    animationData: LottieAnimation,
  };
  //const scroll_able = document.querySelector('.scrollable-div')
  return (
    <div className="section" id="main">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <Lottie options={defaultsettings}
                      height={300}
                      width={300} />
            </div>
          </Fade>
          <Fade bottom>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "jpatel2147@gmail.com"
              }`}
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
        <div className="footer-container">
          <div className="social-icons">
              <IconButton size="large" onClick={() => window.open('https://github.com/jenishpatel2147')}>
                  <GitHubIcon fontSize="large"/>
              </IconButton>
              <IconButton size="large" onClick={() => window.open('https://github.com/jenishpatel2147/Portfolio/src/JenishPatelResume.pdf')}>
                  <ResumeIcon fontSize="large"/>
              </IconButton>
              <IconButton size="large" onClick={() => window.open('https://www.linkedin.com/in/j253pate/')}>
                  <LinkedinIcon fontSize="large" />
              </IconButton>
              <IconButton size="large" onClick={() => window.open('https://www.instagram.com/jenish_2147/')}>
                  <InstagramIcon fontSize="large" />
              </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
