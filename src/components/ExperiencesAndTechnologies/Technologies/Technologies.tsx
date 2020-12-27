import React from 'react'

import * as S from './Technologies.elements'

const Technologies: React.FC = () => {
  return (
    <S.Wrapper title="technologies">
      <S.Container>
        <S.Name size={2} position={true}>
          TypeScript
        </S.Name>
        <S.Name size={2} position={false}>
          React
        </S.Name>
        <S.Name size={1.1} position={true}>
          Flutter
        </S.Name>
        <S.Name size={2} position={false}>
          ReactNative
        </S.Name>
        <S.Name size={1.1} position={true}>
          Python
        </S.Name>
        <S.Name size={2} position={true}>
          JavaScript
        </S.Name>
        <S.Name size={2} position={false}>
          Node.js
        </S.Name>
      </S.Container>
    </S.Wrapper>
  )
}

export default Technologies
