import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../information"

const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="container">
        <div className="projectsLayout">
          <Fade bottom>
            <h1>Projects</h1>
          </Fade>
          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.description}
                  imgUrl={project.img}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
        <div className="projectsLayout_two">
          <Fade bottom>
            <h1>Currently Exploring</h1>
          </Fade>
          <div className="grid">
            <Fade bottom cascade>
              {data.CurrentlyExploring.map((CurrentlyExploring, index) => (
                <Card
                  key={index}
                  heading={CurrentlyExploring.title}
                  paragraph={CurrentlyExploring.description}
                  imgUrl={CurrentlyExploring.img}
                  projectLink={CurrentlyExploring.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
