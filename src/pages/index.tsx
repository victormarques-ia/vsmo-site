import React from 'react'
import Head from 'next/head'
import Navbar from '@components/Navbar/Navbar'
import AboutMe from '@components/AboutMe/AboutMe'
import ExperiencesAndTechnologies from '@components/ExperiencesAndTechnologies/ExperiencesAndTechnologies'
import styled from 'styled-components'

const AppWrapper = styled.div`
  position: relative;

  background-image: url('/pplbg.svg');
  background-repeat: no-repeat;
  background-size: cover;
`

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <AppWrapper>
          <Navbar />
          <AboutMe />
          <ExperiencesAndTechnologies />
        </AppWrapper>
      </main>
    </div>
  )
}

export default Home
