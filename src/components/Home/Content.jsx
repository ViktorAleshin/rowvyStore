import React, { useState, useEffect } from 'react'
import Music_card from './Music_card'
import { musics } from '../../music.data.js'

const Content = () => {

  return (
    <div className='bg-white pb-[40px]'>
        <div className="mx-auto max-w-[800px] flex flex-col items-center">
            <h1 className='font-bold text-4xl text-black mt-[70px]'>Catalog</h1>
            <div className='flex flex-col items-center'>
                {musics.map(music => (
                  <Music_card key={music.id} music={music}/>
                ))}
                <button className='relative bg-transparent mt-[30px] p-4 border-2 border-black text-black text-xl w-[60%] ease-in-out duration-500 hover:text-white before:absolute  before:ease-in-out before:duration-500 before:left-0 before:top-0 before:right-0 before:bottom-0 before:w-[0%] before:bg-black before:hover:w-[100%] '><span className='relative z-10'>View More</span></button>
            </div>
        </div>
    </div>
  )
}

export default Content