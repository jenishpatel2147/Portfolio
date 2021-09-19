import React from "react"
import Fade from "react-reveal/Fade"
import data from "../information"

const Promotion = () => {
  return (
    <div className="section" id="fun">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <p>{data.promotionPara}</p>
        </div>
      </div>
    </div>
  )
}

export default Promotion
