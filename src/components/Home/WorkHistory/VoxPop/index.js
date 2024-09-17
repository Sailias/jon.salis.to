import React from 'react'
import VoteCompass from '../../Portfolio/VoteCompass'
import Polimeter from '../../Portfolio/Polimeter'
import Idap from '../../Portfolio/Idap'
import Echoes from '../../Portfolio/Echoes'
import DegreeHub from '../../Portfolio/DegreeHub'

const VoxPop = ({ expanded }) => {
    return (
        <div className="WorkHistory__item">
            <h4 className="WorkHistory__company">
                <a href="https://www.voxpoplabs.com" target="_blank">
                    Vox Pop Labs
                </a>
                {
                    expanded && 
                    <small className="WorkHistory__link-content">
                        { `https://www.voxpoplabs.com` }
                    </small>
                }
                <small className="WorkHistory__duration">2016 - 2022</small>
            </h4>
            <h5 className="WorkHistory__title">
                Chief Technology Officer / Technical Lead
            </h5>
            <p>
                Spearheaded the creation of highly performant and scalable Elixir applications, supporting millions of users and enhancing the company's technical capabilities.
            </p>
            <p>
                Led developer teams, data science teams, and collaborated with Product and Design while building multiple applications.
            </p>
            <p>
                Expanded the company's offerings into multiple business domains by advocating for and developing a white-label
                product which increased revenue by 300%.
            </p>
            <div className="WorkHistory__notable-projects">
                <VoteCompass expanded={ expanded } />
                <Idap expanded={ expanded } />
                <Polimeter expanded={ expanded } />
                <Echoes expanded={ expanded } />
            </div>
            
        </div>
    )
}

export default VoxPop