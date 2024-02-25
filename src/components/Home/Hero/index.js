// NPM
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = ({ expanded }) => {
  const currentYear = new Date().getFullYear()

  return (
    <section className={ `Hero ${ expanded ? "expanded" : "" }` }>
      <div className="columns">
        <div className="column is-6">
          <h1 className="Hero__title">
            Jon Salis
          </h1>

          <h2 className="Hero__subtitle">
            Chief Technology Officer, full-stack developer, Team Lead with { currentYear - 2005 } years of experience
          </h2>

          <h2 className="Hero__subtitle">
            { currentYear - 2008 } years of Rails;&nbsp;
            { currentYear - 2017 } years of Elixir;&nbsp;
            { currentYear - 2015 } years of React;&nbsp;
            { currentYear - 2019 } years of Python;&nbsp;
          </h2>

          <div className="Hero__contact">
            <a href="mailto:jon@salis.to">
              <FontAwesomeIcon icon={ ["fas", "envelope"] } />
              <span className="Hero__link-content">
                { `jon@salis.to` }
              </span>
            </a>

            <a href="https://linkedin.com/in/jonathan-salis-a9567147" target="_blank">
              <FontAwesomeIcon icon={ ["fab", "linkedin"] } />
              <span className="Hero__link-content">
                { `https://linkedin.com/in/jonathan-salis-a9567147` }
              </span>
            </a>

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
        </div>
      </div>
    </section>
  )
}

export default Hero