"use client"
import React from 'react'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

const Home = () => {

  return (
    <div className='relative'>
      {/* Header */}
      <Navbar />
      <Header />

      {/* Body */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8 p-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
