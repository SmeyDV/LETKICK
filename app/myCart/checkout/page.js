'use client'
import React from 'react'
import Checkout from './Checkout'
import NavBar from '../../../components/NavBar'
import Footer from '../../../components/Footer'

export default function page() {
  return (
    <div>
      <NavBar/>
      <Checkout/>
      <Footer/>
    </div>
  )
}
