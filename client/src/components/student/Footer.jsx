import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-900 md:px-36 text-left w-full m-10'>
        <div className='flex flex-col md:flex-row items-start px8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
            <div className='flex flex-col md:items-start items-center w-full'>
              <img src={assets.logo_dark} alt="logo" />
              <p className='mt-6 text-center md:text-left text-sm text-white/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusamus modi qui quidem libero numquam nemo laboriosam perferendis dolorem veritatis?
              </p>
            </div>
        </div>
        <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2025 © Mercy. All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default Footer
