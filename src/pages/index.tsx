import React from 'react'
import Head from 'next/head'

import { AppWrapper } from '../styles/global'

import {
  Navbar,
  AboutMe,
  ExperiencesAndTechnologies,
  Footer
} from '@components/index'
import dynamic from 'next/dynamic'

const Projects = dynamic(
  () => {
    return import('@components/Projects/Projects')
  },
  { ssr: false }
)
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Victor Silva</title>
      </Head>

      <main>
        <AppWrapper>
          <Navbar />
          <AboutMe />
          <ExperiencesAndTechnologies />
          <Projects />
          <Footer />
        </AppWrapper>
      </main>
    </div>
  )
}

export default Home
