import React from 'react'
import './Sidebar.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div className='flex flex-col items-center fixed top-0 bottom-0'>
      <div className="sidebar__logo">
        <img className="object-contain w-20 py-3" src={require("../assets/images/disney+_logo.png")} alt="logo" />
      </div>
      <div className="sidebar__icons flex flex-col justify-around">
        <AccountCircleOutlinedIcon className='text-white cursor-pointer' />
        <HomeOutlinedIcon className='text-white cursor-pointer' />
        <Link to={'./movies'}><LiveTvOutlinedIcon className='text-white cursor-pointer'/></Link>
        <MovieCreationOutlinedIcon className='text-white cursor-pointer'/>
        <SportsBaseballOutlinedIcon className='text-white cursor-pointer' />
      </div>

    </div>
  )
}

export default Sidebar