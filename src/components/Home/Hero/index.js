// NPM
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = ({ expanded }) => {
  return (
    <section className={ `Hero ${ expanded ? "expanded" : "" }` }>
      <div className="columns">
        <div className={`column ${expanded ? 'is-10' : 'is-6'}`}>
          <h1 className="Hero__title">
            Jon Salis <small>Toronto, Canada</small>
          </h1>
          <ul className="Shared__horizontal-list">
            <li>Technical Team Lead</li>
            <li>Full Stack Developer</li>
            <li>Chief Technology Officer</li>
          </ul>
          <div className="Hero__contact">
            <a href="mailto:jon@salis.to">
              <FontAwesomeIcon icon={ ["fas", "envelope"] } />
              <span className="Hero__link-content">
                { `jon@salis.to` }
              </span>
            </a>

            { !expanded && <a href="https://linkedin.com/in/jonathan-salis-a9567147" target="_blank">
              <FontAwesomeIcon icon={ ["fab", "linkedin"] } />
              <span className="Hero__link-content">
                { `https://linkedin.com/in/jonathan-salis-a9567147` }
              </span>
            </a> }

            <a href="https://github.com/sailias" target="_blank">
              <FontAwesomeIcon icon={ ["fab", "github"] } />
              <span className="Hero__link-content">
                { `https://github.com/sailias` }
              </span>
            </a>

            {
              expanded &&
                <a href="https://jon.salis.to" target="_blank">
                  <FontAwesomeIcon icon={ ["fas", "globe"] } />
                  <span className="Hero__link-content">
                    { `https://jon.salis.to` }
                  </span>
                </a>
            }
          </div>
          <h3 className="CommonSection__title">
            about me
          </h3>
          <p>
            I am Jonathan Salis, a dedicated technology leader with nearly two decades of diverse industry experience. 
            My career has been marked by key roles where I've demonstrated my expertise in developing scalable applications, 
            pioneering innovative frameworks, and leading high-performing teams. 
            Here are some of my significant roles:
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero