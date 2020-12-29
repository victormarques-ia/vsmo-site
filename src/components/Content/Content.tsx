import React from 'react'
import * as S from './Content.elements'

import { Variants } from 'framer-motion'

import { WithChildren } from '@utils/customTypes'

interface ContentProps {
  title?: string
  children: WithChildren
  className?: string
  itemAnimation?: Variants
}

const Content: React.FC<ContentProps> = ({
  title,
  children,
  className,
  itemAnimation
}: ContentProps) => {
  return (
    <S.Wrapper className={className || title} variants={itemAnimation}>
      <S.OpenTitle>{`<${title}>`}</S.OpenTitle>
      {children}
      <S.CloseTitle>{`</${title}>`}</S.CloseTitle>
    </S.Wrapper>
  )
}

export default Content
