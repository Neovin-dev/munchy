import React, { useState } from 'react'
import './Home.css' // linking CSS file for styling
import Header from '../../components/Header/Header' 
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu' // Importing ExploreMenu component

const Home = () => {

  const[category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home
