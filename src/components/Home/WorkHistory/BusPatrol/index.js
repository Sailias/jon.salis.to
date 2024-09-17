// NPM
import React from 'react'
import MicroserviceCDKProject from '../../Portfolio/MicroserviceCDKProject'

const BusPatrol = ({ expanded }) => {
    return (
        <div className="WorkHistory__item">
            <h4 className="WorkHistory__company">
                <a href="https://www.voxpoplabs.com" target="_blank">
                    Bus Patrol Inc
                </a>
                {
                    expanded && 
                    <small className="WorkHistory__link-content">
                        { `https://buspatrol.com` }
                    </small>
                }
                <small className="WorkHistory__duration">2022 - present</small>
            </h4>
            <h5 className="WorkHistory__title">
                Sr. Full Stack Development Technical Lead
            </h5>
            <p>
                Managed a team of 10 developers, architected and developed a serverless microservice framework written in Python, reduced developer lead time, 
                enhanced scalability, and reduced operating costs across the entire organization while architecting and delivering business functionality in a
                stream aligned team in collaboration with the Product department.
            </p>
            <div className="WorkHistory__notable-projects">
                <MicroserviceCDKProject expanded={ expanded } />
            </div>
        </div>
    )
}

export default BusPatrol