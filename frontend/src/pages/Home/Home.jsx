import React, { useState } from 'react'
import './Home.css' // linking CSS file for styling
import Header from '../../components/Header/Header' 
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu' // Importing ExploreMenu component
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'


const Home = () => {

  const[category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      {/* The ExploreMenu component is used to display the menu categories */}
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home
