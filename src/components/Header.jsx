import React from 'react'
import './Header.css'
function Header() {
  return (
    <header className='bg-black'>
      <div className='flex content-between'>
        <div className='flex-grow'>
          <img className="object-contain w-20 py-3" src={require("../assets/images/disney+_logo.png")} alt="logo" />
        </div>
        <div className='my-auto'>
          <button className="text-white text-lg header__btn ">LOGIN</button>
        </div>
      </div>
    </header>
  )
}

export default Header;