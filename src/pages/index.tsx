import React from 'react'
import Head from 'next/head'

import { AppWrapper } from '../styles/global'

import {
  Navbar,
  AboutMe,
  ExperiencesAndTechnologies,
  Projects,
  Footer
} from '@components/index'

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
