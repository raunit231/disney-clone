import React from 'react'
import './Footer.css'
import CheckIcon from '@mui/icons-material/Check';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <div className='w-full bg-black font-inter text-sm font-medium mb-4'>
      <div className="flex justify-between my-9 mx-6 text-left">
        <div className="flex flex-cols">
          <div className='flex flex-col space-y-2'>
            <p className="text-white font-medium my-2">Company</p>
            <div className="text-gray-400">
              <p>About Us</p>
              <p>Carrers</p>
            </div>
          </div>
        </div>
        <div className="flex flex-cols">
          <div className='flex flex-col space-y-2'>
            <p className="text-white font-medium my-2">View Website in</p>
            <div className="text-gray-400">
              <p><CheckIcon /> English</p>
            </div>
          </div>
        </div>
        <div className="flex flex-cols">
          <div className='flex flex-col space-y-2'>
            <p className="text-white font-medium my-2">Need Help?</p>
            <div className="text-gray-400">
              <p>Visit Help Center</p>
              <p>Share Feedback</p>
            </div>
          </div>
        </div>
        <div className="flex flex-cols">
          <div className='flex flex-col space-y-2'>
            <p className="text-white font-medium my-2">Connect with Us</p>
            <div className="text-gray-400">
              <p><FacebookIcon />  <TwitterIcon /></p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-gray-400 mx-6'>
        © 2023 STAR. All Rights Reserved.
      </div>
      <ul className='flex space-x-2 text-gray-400 mx-6 my-4'>
        <li>Terms Of Use</li>
        <li>Privacy Policy</li>
        <li>FAQ</li>
      </ul>
    </div>
  )
}

export default Footer