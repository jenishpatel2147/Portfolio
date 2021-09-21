import React from "react"
import Fade from "react-reveal/Fade"
import data from "../information"
import imageLoc from "../images/photoJenish.jpg"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src={imageLoc} style={{height: "400px", width: "400px"}} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
