import React from 'react'

import * as S from './Content.elements'

import { WithChildren } from '@utils/customTypes'

interface ContentProps {
  title?: string
  children: WithChildren
  className?: string
}

const Content: React.FC<ContentProps> = ({
  title,
  children,
  className
}: ContentProps) => {
  return (
    <S.Wrapper className={className || title}>
      <S.OpenTitle>{`<${title}>`}</S.OpenTitle>
      {children}
      <S.CloseTitle>{`</${title}>`}</S.CloseTitle>
    </S.Wrapper>
  )
}

export default Content
