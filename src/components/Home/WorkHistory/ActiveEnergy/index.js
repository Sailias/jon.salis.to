import React from 'react'

const ActiveEnergy = ({ expanded }) => {
    return (
        <div className="WorkHistory__item">
            <h4 className="WorkHistory__company">
            <a href="https://www.aegplc.com/" target="_blank">
                AE Inc.
                <small className="WorkHistory__duration">
                    2008 - 2012
                </small>
            </a>
            </h4>
            <h5 className="WorkHistory__title">
                Senior Ruby on Rails Developer
            </h5>
        </div>
    )
}

export default ActiveEnergy