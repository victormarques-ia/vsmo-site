import React from 'react'

import {
  TechnologiesContent,
  TechnologiesContainer,
  TechnologieName
} from './Technologies.elements'

const Technologies: React.FC = () => {
  return (
    <TechnologiesContent title="technologies">
      <TechnologiesContainer>
        <TechnologieName size={2}>TypeScript</TechnologieName>
        <TechnologieName size={2}>React</TechnologieName>
        <TechnologieName size={1.1}>Flutter</TechnologieName>
        <TechnologieName size={2}>ReactNative</TechnologieName>
        <TechnologieName size={1.1}>Python</TechnologieName>
        <TechnologieName size={2}>JavaScript</TechnologieName>
        <TechnologieName size={2}>Node.js</TechnologieName>
      </TechnologiesContainer>
    </TechnologiesContent>
  )
}

export default Technologies
