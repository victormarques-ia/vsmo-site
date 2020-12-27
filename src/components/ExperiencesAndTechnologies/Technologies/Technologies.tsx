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
        <TechnologieName size={2} position={true}>
          TypeScript
        </TechnologieName>
        <TechnologieName size={2} position={false}>
          React
        </TechnologieName>
        <TechnologieName size={1.1} position={true}>
          Flutter
        </TechnologieName>
        <TechnologieName size={2} position={false}>
          ReactNative
        </TechnologieName>
        <TechnologieName size={1.1} position={true}>
          Python
        </TechnologieName>
        <TechnologieName size={2} position={true}>
          JavaScript
        </TechnologieName>
        <TechnologieName size={2} position={false}>
          Node.js
        </TechnologieName>
      </TechnologiesContainer>
    </TechnologiesContent>
  )
}

export default Technologies
