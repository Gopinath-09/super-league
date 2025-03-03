import React from 'react'
import { bgContact } from '../assets/assets'

const Contact = () => {
  return (
    <section className='relative mt-56 max-w-[1920px] mx-auto flex justify-center items-center'>
        <img className='absolute w-full h-full' src={bgContact} alt="" />
        <div className='text-white gap-y-2 flex justify-center flex-col items-center z-20 bg-gradient-to-b from-black w-full h-full via-gray-500/30 to-[#73737300]'>
            <p className='text-sm mt-64 text-gray-300'>Stay in the loop. Get the latest updates from SLK.</p>
            <h1 className='my-3 text-4xl'>Stay <span className='text-transparent bg-gradient-to-t from-[#c71c22fd] from-15% to-[#e4e2e2] bg-clip-text'>Connected</span></h1>
            <h1 className='mt-3 text-6xl font-bold text-transparent h-fit bg-gradient-to-b from-[#5a5a5a] from-60% to-[#bebebefd] bg-clip-text'>Super League Kerala</h1>
            <input className='text-center bg-[#bcbcbc] mt-10 h-16 w-1/2  rounded-xl text-black text-2xl' type="text" value='Email' />
            <button className='mb-64 bg-gradient-to-b from-gray-500 to-[#c71c22fd] py-5 mt-10 px-12 rounded-2xl font-semibold tracking-wider w-fit text-lg'>Subscribe us</button>
        </div>
    </section>
  )
}

export default Contact