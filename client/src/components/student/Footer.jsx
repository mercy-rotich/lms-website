import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 px-4 md:px-8 lg:px-36 text-left w-full mt-10 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-start justify-center gap-6 md:gap-16 lg:gap-32 py-10 border-b border-white/30'>
          <div className='flex flex-col md:items-start items-center w-full md:w-1/3'>
            <img src={assets.logo_dark} alt="logo" />
            <p className='mt-6 text-center md:text-left text-sm text-white/80'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusamus modi qui quidem libero numquam nemo laboriosam perferendis dolorem veritatis?
            </p>
          </div>
          
          <div className='flex flex-col md:items-start items-center w-full md:w-1/3'>
            <h2 className='font-semibold text-white mb-5'>Company</h2>
            <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
              <li><a href="#" className='hover:text-white transition-colors'>Home</a></li>
              <li><a href="#" className='hover:text-white transition-colors'>About us</a></li>
              <li><a href="#" className='hover:text-white transition-colors'>Contact us</a></li>
              <li><a href="#" className='hover:text-white transition-colors'>Privacy policy</a></li>
            </ul>
          </div>
          
          <div className='hidden md:flex flex-col items-start w-full md:w-1/3'>
            <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
            <p className='text-sm text-white/80 mb-4'>
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full'>
              <input 
                type="email" 
                placeholder='Enter your email' 
                className='border border-gray-500/30 bg-gray-800 text-white placeholder-gray-500 outline-none flex-1 min-w-0 h-9 rounded px-2 text-sm focus:border-blue-500 transition-colors'
              />
              <button className='bg-blue-600 hover:bg-blue-700 transition-colors px-4 h-9 text-white rounded whitespace-nowrap'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <p className='py-4 text-center text-xs md:text-sm text-white/60'>
          Copyright 2025 © Mercy. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer