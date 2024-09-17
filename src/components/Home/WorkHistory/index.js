// NPM
import React from 'react'
import BusPatrol from './BusPatrol'
import VoxPop from './VoxPop'
import LighthouseLabs from './LighthouseLabs'
import FunctionalImperative from './FunctionalImperative'
import ActiveEnergy from './ActiveEnergy'

const WorkHistory = ({ expanded }) => {

  return (
    <section className={ `WorkHistory CommonSection ${ expanded ? "expanded" : "" }` }>
      <h3 className="CommonSection__title">
        work history
      </h3>
      <BusPatrol expanded={ expanded } />
      <VoxPop expanded={ expanded } />
      <LighthouseLabs expanded={ expanded } />
      <FunctionalImperative expanded={ expanded } />
      <ActiveEnergy expanded={ expanded } />
    </section>
  )

}

export default WorkHistory