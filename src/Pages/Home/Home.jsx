import React, { useState } from 'react'
import Header from '../../Component/Header/Header'
import ExploreMenu from '../../Component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay'
import AppDownload from '../../Component/AppDownload/AppDownload'

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload />
      </main>
    </div>
  )
}

export default Home
