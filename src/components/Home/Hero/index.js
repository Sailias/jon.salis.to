// NPM
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = ({ expanded }) => {
  const currentYear = new Date().getFullYear()

  return (
    <section className={ `Hero ${ expanded ? "expanded" : "" }` }>
      <div className="columns">
        <div className={`column ${expanded ? 'is-10' : 'is-6'}`}>
          <h1 className="Hero__title">
            Jon Salis <small>Toronto, Canada</small>
          </h1>
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
          <h2 className="Hero__subtitle">
            Senior Full Stack Development Team Lead <small>at BusPatrol</small>
          </h2>
          <p>
            Managed a team of 10 developers, architected and developed a serverless microservice framework written in Python, reduced developer lead time, 
            enhanced scalability, and reduced operating costs across the entire organization.
          </p>
          
          <h2 className="Hero__subtitle">
            Chief Technology Officer <small>at Vox Pop Labs Inc.</small>
          </h2>
          <p>
            Spearheaded the creation of highly performant and scalable Elixir applications, supporting millions of users and enhancing the company's technical capabilities.
          </p>

          <h2 className="Hero__subtitle">
            Instructor <small>at Lighthouse Labs</small>
          </h2>
          <p>
            Passionately taught web fundamentals, mentoring and guiding aspiring web developers to achieve their career goals.
          </p>

          <h2 className="Hero__subtitle">
            Chief Technology Officer <small>at Functional Imperative</small>
          </h2>
          <p>
            Founded and led a team of dedicated professionals, delivering robust and innovative solutions for various clients.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero