import React from 'react'

import { ContentBody, OpenTitle, CloseTitle } from './Content.elements'

type WithChildren<T = unknown> = T & { children?: React.ReactNode }

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
    <ContentBody className={className || title}>
      <OpenTitle>{`<${title}>`}</OpenTitle>
      {children}
      <CloseTitle>{`</${title}>`}</CloseTitle>
    </ContentBody>
  )
}

export default Content
