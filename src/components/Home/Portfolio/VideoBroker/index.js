// NPM
import React, { useRef, useState } from 'react';

import { Player } from "@lottiefiles/react-lottie-player";
import { create } from '@lottiefiles/lottie-interactivity';

// Constants
import animationData from './animationData';

const VideoBroker = ({ expanded }) => {
  const rootRef = useRef(null)
  const [lottiePlayer, setLottiePlayer] = useState(null)

  return (
    <div className="VideoBroker PortfolioItem" ref={ rootRef }>
      { !expanded && <div className="PortfolioItem__image-holder">
        <Player
          lottieRef={(instance) => {
            setLottiePlayer(instance)
          }}
          onEvent={(event) => {
            if (event === "load") {
              create({
                mode: "scroll",
                player: lottiePlayer,
                container: rootRef.current,
                actions: [
                  {
                    visibility: [0.5, 1],
                    type: "seek",
                    frames: [100, 181]
                  }
                ]
              });
            }
          }}
          autoplay={ false }
          controls={ false }
          src={ animationData }
        />
      </div> }
      <div className="PortfolioItem__content">
        <h4 className="PortfolioItem__content-title">
          Video Transcoding Microservice
        </h4>

        <p className="PortfolioItem__content-description">
          Decomposed functionality from multiple monoliths responsible for communicating with IoT devices.
          Processed and transcoded 600,000 videos a day while reducing operating costs by 10x and increased video upload rate, saving the organization over $500,000 in annual operating costs.
        </p>
        
        <div className="PortfolioItem__content-stack tags">
          <span className="tag is-medium">Python</span>
          <span className="tag is-medium">AWS CDK</span>
          <span className="tag is-medium">AWS Stepfunctions</span>
          <span className="tag is-medium">AWS Lambda</span>
          <span className="tag is-medium">AWS DynamoDB</span>
          <span className="tag is-medium">AWS Athena</span>
          <span className="tag is-medium">DataDog</span>
          <span className="tag is-medium">ffmpeg</span>
        </div>

        <h4 className="PortfolioItem__content-features-title">
          Features
        </h4>
        <ul>
          <li>Optimized Lambda functions tailored to process various video sizes</li>
          <li>Resilient event-driven video processing pipeline</li>
          <li>Enhanced monitoring and visibility via logging numerous metrics and dashboards in DataDog</li>
        </ul>
      </div>
    </div>
  )

}

export default VideoBroker