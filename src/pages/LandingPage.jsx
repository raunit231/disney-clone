import React from 'react'
import Header from '../components/Header'
import './LandingPage.css'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <div className='flex flex-col h-screen '>
      <div>
        <Header />
      </div>
      <div className='landingPage flex-grow flex flex-col items-center'>
        <div className='landingPage__logo'>
          <img src={require("../assets/images/l_logo.png")} alt="" />
        </div>
        <div className='landingPage__btn text-white flex flex-col justify-center'>
        <Link to="./home" className=' bg-blue-500 hover:bg-blue-600 cursor-pointer text-center w-full'><button className='text-xl mx-auto'>
            Explore
          </button></Link>
        </div>
        <div className='text-white w-6/12 py-3 font-inter'>
          <p>
            Get Primier Access to Raya and The Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and the Disney bundle is increased by 1$.
          </p>
        </div>
        <div className='flex justify-center'>
          <img className='w-1/2' src={require("../assets/images/logos.png")} alt="" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage