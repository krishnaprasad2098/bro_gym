import React, {useState} from 'react'
import Exercise from '../components/Exercise'
import MainBanner from '../components/MainBanner'
import SearchExercise from '../components/SearchExercise'
const Home = () => {
  return (
    <div>
      <MainBanner />
      <SearchExercise />
      <Exercise />
    </div>
  )
}

export default Home