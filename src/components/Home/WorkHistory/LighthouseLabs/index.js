import React from 'react'

const LighthouseLabs = ({ expanded }) => {
    return (
        <div className="WorkHistory__item">
            <h4 className="WorkHistory__company">
                <a href="https://lighthouselabs.ca" target="_blank">
                    Lighthouse Labs Coding School
                </a>
                {
                    expanded && 
                    <small className="WorkHistory__link-content">
                        { `https://lighthouselabs.ca` }
                    </small>
                }
                <small className="WorkHistory__duration">2015 - 2019</small>
            </h4>
            <h5 className="WorkHistory__title">
                Web Instructor / Lecturer
            </h5>
            <p>
                Passionately taught web fundamentals, mentoring and guiding aspiring web developers to achieve their career goals.
            </p>
        </div>
    )
}

export default LighthouseLabs