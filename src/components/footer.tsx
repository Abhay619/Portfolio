  import React from 'react'
  import { IoHeart } from 'react-icons/io5'

  const Footer = () => {
    return (
      <footer className='flex flex-col items-center text-center mt-12 font-jakarta col-span-12 border-t border-t-zinc-600 w-full'>
              <p className='mt-3'>
              © 2025 All Rights Reserved
              </p>
              <p className='text-zinc-400 text-sm'>
                  Made with <IoHeart className='inline text-xl text-white'/> by <a href="" className='text-blue-500 hover:underline'>Abhay</a> | Look at some of my projects on <a href="https://github.com/Abhay619" target='blank' className='text-green-400'>Github</a>
              </p>
          </footer>
    )
  }

  export default Footer