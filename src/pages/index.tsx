import React from 'react'
import Head from 'next/head'
import Navbar from '@components/Navbar/Navbar'
import AboutMe from '@components/AboutMe/AboutMe'
import ExperiencesAndTechnologies from '@components/ExperiencesAndTechnologies/ExperiencesAndTechnologies'
import styled from 'styled-components'
import Footer from '@components/Footer/Footer'
import Projects from '@components/Projects/Projects'

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content min-content min-content min-content min-content;
  grid-row-gap: 20rem;

  background-image: url('/pplbg.svg');
  background-repeat: no-repeat;
  background-size: cover;
`

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
