import React from "react"
import Fade from "react-reveal/Fade"
import data from "../information"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { StarIcon } from "../images/tree.png"



const Experience = () => {
    return (
      <div className="section" id="experience">
        <div className="experience-header">
        <h1>Experience</h1>      
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0a0a06', color: '#90ee90' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2021 Jan - 2021 April"
            iconStyle={{ background: '#0a0a06', color: '#90ee90' }}
            icon={StarIcon}
          >
            <h3 className="vertical-timeline-element-title">Software Developer | Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
            <p>Equitable Life of Canada</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0a0a06', color: '#90ee90' }}
            date="March 2021 - June 2021"
            iconStyle={{ background: '#0a0a06', color: '#90ee90' }}
            icon={StarIcon}
          >
            <h3 className="vertical-timeline-element-title">Full-Stack Developer | Volunteer</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>isgood.ia</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0a0a06', color: '#90ee90' }}
            date="2020 May - 2020 Aug"
            iconStyle={{ background: '#0a0a06', color: '#90ee90' }}
            icon={StarIcon}
          >
            <h3 className="vertical-timeline-element-title">Automation Developer | Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Oakville, ON</h4>
            <p>Ford Motor Company</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#0a0a06', color: '#90ee90' }}
            date="March 2019 - June 2019"
            iconStyle={{ background: '#0a0a06', color: '#90ee90' }}
            icon={StarIcon}
          >
            <h3 className="vertical-timeline-element-title">Web Developer | Part-time</h3>
            <h4 className="vertical-timeline-element-subtitle">Hamilton, ON</h4>
            <p>Private Contract</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
      </div>
    )
  }
  
  export default Experience;
