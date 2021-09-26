import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#main")}
            className="name"
            tabIndex={0}
          >
            Jenish
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#experience")}>Experience</button>
            <button onClick={() => scrollTo("#projects")}>Projects</button>
            <button onClick={() => scrollTo("#fun")}>Fun</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
