import React from 'react'

import * as S from './Technologies.elements'

const technologiesData = [
  {
    id: 1,
    name: 'TypeScript',
    size: 2
  },
  {
    id: 2,
    name: 'React',
    size: 2
  },
  {
    id: 3,
    name: 'Flutter',
    size: 1.2
  },
  {
    id: 4,
    name: 'React Native',
    size: 2
  },
  {
    id: 5,
    name: 'Python',
    size: 1.1
  },
  {
    id: 6,
    name: 'JavaScript',
    size: 2
  },
  {
    id: 7,
    name: 'Node.js',
    size: 2
  }
]

const Technologies: React.FC = () => {
  let position = true
  return (
    <S.Wrapper title="technologies">
      <S.Container>
        {technologiesData?.map(technologie => (
          <S.Name
            key={technologie.id}
            size={technologie.size}
            position={position}
          >
            {(position = !position)}
            {technologie.name}
          </S.Name>
        ))}
      </S.Container>
    </S.Wrapper>
  )
}

export default Technologies
