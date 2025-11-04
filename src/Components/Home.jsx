import React from 'react'
import Navbar from '../Components/Navbar';
import Homeslider from '../Components/CatSlider';
import Slide from './Homeslide';

function Home() {
  return (
    <div>
       <Navbar />
       <Slide />
      <Homeslider />
    </div>
  )
}

export default Home
