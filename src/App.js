import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} /> {/*rendering dynamically inside a component */}
      </Routes>
      {/* <Footer /> */}
    </div>
    </BrowserRouter>
  )
}

export default App