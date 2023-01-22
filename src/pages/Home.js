import React from 'react'
import AboutUs from '../components/AboutUs'
import MainBanner from '../components/MainBanner'
import SearchExercise from '../components/SearchExercise'

const Home = () => {
  return (
    <div>
      <MainBanner />
      <SearchExercise />
      <AboutUs />
    </div>
  )
}

export default Home