import React, {useState} from 'react'
import Exercise from '../components/Exercise'
import MainBanner from '../components/MainBanner'
import SearchExercise from '../components/SearchExercise'
// import SearchBar from '../components/SearchBar'
const Home = () => {
  // const[bodyPart,setbodyParts] = useState('all')
  return (
    <div>
      <MainBanner />
      <SearchExercise />
      <Exercise />
    </div>
  )
}

export default Home