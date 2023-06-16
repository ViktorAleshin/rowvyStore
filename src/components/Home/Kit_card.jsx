import React from 'react'

const Kit_card = ({kit}) => {
  return (
    <div key={kit.id} className="flex flex-col items-center justify-between py-[15px] w-full px-4 rounded-[15px] shadow-xl my-8">
       <div>
       <img
            className="rounded-[20px] p-[10px] mt-4"
            src={kit.image}
            alt="Sarafan"
            width={"200px"}
            height={"200px"}
        />
        <h1 className='text-black text-2xl font-normal pt-[20px] text-center'>{kit.name}</h1></div>
        <button className='relative my-4 bg-transparent mt-[30px] p-4 border-2 border-black text-black text-xl w-[60%] ease-in-out duration-500 hover:text-white before:absolute  before:ease-in-out before:duration-500 before:left-0 before:top-0 before:right-0 before:bottom-0 before:w-[0%] before:bg-black before:hover:w-[100%] '><span className='relative z-10'>Download</span></button>
    </div>
  )
}

export default Kit_card