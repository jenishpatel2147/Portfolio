import React from "react"
import Fade from "react-reveal/Fade"
import data from "../information"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <span>
            Made with <icon>❤</icon> by{" "}
            <a href="">Jenish Patel</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer;
