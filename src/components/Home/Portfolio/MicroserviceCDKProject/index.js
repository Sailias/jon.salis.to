// NPM
import React, { useRef, useState } from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import { create } from '@lottiefiles/lottie-interactivity';

// Constants
import animationData from './animationData';

const MicroserviceCDKProject = ({ expanded }) => {
  const rootRef = useRef(null)
  const [lottiePlayer, setLottiePlayer] = useState(null)

  return (
    <div className="MicroserviceCDKProject PortfolioItem" ref={ rootRef }>
      <div className="PortfolioItem__image-holder">
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
                    frames: [0, 77]
                  }
                ]
              });
            }
          }}
          autoplay={ false }
          controls={ false }
          src={ animationData }
        />
      </div>
      <div className="PortfolioItem__content">
        <h4 className="PortfolioItem__content-title">
          Microservice CDK Project
        </h4>

        <p className="PortfolioItem__content-description">
          An internal project for creating serverless first microservices with AWS CDK
        </p>

        <div className="PortfolioItem__content-stack tags">
          <span className="tag is-medium">Python</span>
          <span className="tag is-medium">Pytest</span>
          <span className="tag is-medium">Pantsbuild</span>
          <span className="tag is-medium">AWS CDK</span>
          <span className="tag is-medium">AWS Stepfunctions</span>
          <span className="tag is-medium">AWS Lambda</span>
          <span className="tag is-medium">AWS CloudFormation</span>
          <span className="tag is-medium">AWS DynamoDB</span>
          <span className="tag is-medium">aws_cdk.assertions</span>
          <span className="tag is-medium">Docker</span>
          <span className="tag is-medium">GitHub Actions</span>
          <span className="tag is-medium">AWS local stepfunctions - Docker</span>
          <span className="tag is-medium">Vue.js</span>
          <span className="tag is-medium">Single-spa</span>
          <span className="tag is-medium">DataDog</span>
        </div>

        <h4 className="PortfolioItem__content-features-title">
          Features
        </h4>
        <ul>
          <li>Independently deployable microservices orchestrated with CDK</li>
          <li>Fine grained CDK testing via aws_cdk.assertions</li>
          <li>Minimal deployable bundle via Pantsbuild.org</li>
          <li></li>
        </ul>
      </div>
    </div>
  )

}

export default MicroserviceCDKProject