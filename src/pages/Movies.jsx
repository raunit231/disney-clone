import React from 'react'
import Header from '../components/Header'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';


function Movies() {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className="relative flex-1 flex flex-col">

        <div className="absolute -z-10 h-full">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA1548A6B82C9991B1D38DF251A388FEA2483904510FBC73E150F67F7BDE38C0/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
        </div>

        <img className='w-1/2 ml-6 mt-16 ' src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78" alt="" />
        <div className="icon ml-5 mt-5 flex space-x-5">
          <div className=" font-bold bg-white cursor-pointer h-10 w-24 flex justify-center items-center rounded-sm">
            <PlayArrowIcon />  <span className='font-light mr-1 '> PLAY</span>
          </div>
          <div className="text-white cursor-pointer border border-gray-400 h-10 w-32 bg-black bg-opacity-50 flex justify-center items-center rounded-sm ">
            <PlayArrowIcon />  <span className='font-light mr-1'> TRAILER</span>
          </div>
          <div className="text-white cursor-pointer border border-gray-400 h-10 w-10 bg-black bg-opacity-50 flex rounded-full justify-center items-center">
            <AddIcon />
          </div>
        </div>
        <div className='ml-5'>
          <div className='text-gray-100 font-medium my-2 text-sm'>2010 • 1h 40m • Family | Fantasy | Animation | Action-Adventure | Musical</div>
          <div className='text-white w-3/5 font-medium text-base my-5'>When the kingdom's most wanted bandit is taken hostage by Rapunzel — a teen with 70 feet of golden hair who's looking to escape the tower where she's been locked away for years — the unlikely duo sets off on a hair-raising escapade.</div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Movies