import React from 'react'
import Navbar from '../Components/Navbar';
import HomeFeaturedProduct from './HomeFeaturedProduct';
import Slide from './Homeslide';
import HomeCategorie from './HomeCategories';
import AboutSection from './AboutSection';
import Testimonials from './ReviewSecton';
import Footer from './Footer';

function Home() {
  return (
    <div>
       <Navbar />
       <Slide />
       <HomeCategorie />
      <HomeFeaturedProduct />
      <AboutSection />
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
