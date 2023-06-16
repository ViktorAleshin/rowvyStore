import React from 'react'
import {AiFillInstagram, AiFillMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-[#000300] mt-[100px]'>
      <div className='flex flex-col justify-center'>
        <p className='text-white text-3xl px-8 pb-4 font-'>1rowvy</p>
        <div className='flex'>
          <AiFillInstagram className="text-white w-[30px] h-[30px] mx-4 opacity-60 hover:opacity-100"/>
          <AiFillMail className="text-white w-[30px] h-[30px] mx-4 opacity-60 hover:opacity-100"/>
        </div>
      </div>
      <p className='text-white text-xl text-center mb-8'><span></span>2023</p>    
    </div>
  )
}

export default Footer