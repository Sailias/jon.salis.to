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
            summary
          </h3>
          <h2 className="Hero__subtitle">
            Chief Technology Officer
            <ul>
              <li>10 years leading multiple companies</li>
              <li>Talent acquisition within Technology department</li>
              <li>Managed development teams while working with Product</li>
            </ul>
          </h2>
          <h2 className="Hero__subtitle">
            Full-stack developer
            <ul>
              <li>Rails: { currentYear - 2008 } years - Rails developer since 2008 (Rails 2.1.0).</li>
              <li>Elixir: { currentYear - 2017 } years - Multiple production applications focusing on scalability and LiveView componentization.</li>
              <li>Python: { currentYear - 2019 } years - AWS Lambda, Internal microservice framework, docker builds/deployments via pantsbuild</li>
              <li>React: { currentYear - 2015 } years - Adopted React almost a decade ago after Backbone and Angular.</li>
            </ul>
          </h2>
          <h2 className="Hero__subtitle">
            Team Lead
            <ul>
              <li>Lead back-end, front-end, platform engineering, and enablement teams</li>
            </ul>
          </h2>
          <h2 className="Hero__subtitle">
            Programming Instructor
            <ul>
              <li>Lecturer at a Toronto based programming bootcamp</li>
            </ul>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero