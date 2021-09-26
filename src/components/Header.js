import React from "react"
import Fade from "react-reveal/Fade"
import data from "../information"
import Lottie from "react-lottie"
import Typed from 'typed.js'
import { useRef, useEffect} from 'react';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import ResumeIcon from '@mui/icons-material/Description';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import { IconButton } from "@material-ui/core";

const Header = ({LottieAnimation}) => {

  //const scroll_able = document.querySelector('.scrollable-div')
  const defaultsettings = {
    loop: true,
    autoplay: true,
    animationData: LottieAnimation,
  };
  
  // Create reference to store the DOM element containing the animation
	const el = useRef(null);
  // Create reference to store the Typed instance itself
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        "Hi, I'm <strong>Jenish</strong> 👋",
        "3rd year CS student @ UWaterloo.",
        "Passionate <strong>coder</strong> looking for <strong>internships</strong>."
      ],
      typeSpeed: 50,
      smartBackspace: true,
      loop: true,
      backSpeed: 100,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
  
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])
  
  return (
    <div className="section" id="main">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <div className="type-wrap">
              <span style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
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
              <IconButton size="large" onClick={() => window.open('https://github.com/jenishpatel2147/Portfolio/tree/main/src/JenishPatelResume.pdf')}>
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
