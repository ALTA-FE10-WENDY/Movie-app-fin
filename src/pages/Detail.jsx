import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

import { AiFillHome } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

function Detail() {

  const navigate = useNavigate()
  const location = useLocation()

  const item = location?.state?.item

  return (
    <>
      {/* <Navbar/> */}
      <img className='w-screen h-screen blur-sm glass opacity-20 absolute top-0 object-cover backdrop-blur-sm' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}></img>

      <div className='z-10 absolute pl-[10%] pr-[10%] mt-[5%] grid grid-cols-12 '>
        <div className='col-span-12 md:col-span-4 grid grid-cols-2'>
          <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} className="outline-3 outline-dotted col-span-2 mb-0 md:mb-10" />
          <button className={`btn btn-primary invisible mt-0 md:visible col-span-2`}>
            <AiFillStar className='mr-2' /><p className='text-sm font-semibold'>Favorite</p>
          </button>
        </div>

        <div className='col-span-12 md:col-span-8  md:pl-[20%] '>
          <p className='text-5xl sm:text-6xl md:text-4xl lg:text-5xl w-full pb-5'>{item.title}</p>
          <p className='text-xl md:text-xl lg:text-2xl w-full pb-5'>{item.overview}</p>
          <p className='text-xl md:text-xl lg:text-2xl w-full pb-5'>Released on: {item.release_date}</p>
          <div className='grid grid-cols-2 pb-5'>
            <button className='btn btn-primary w-4/5 self-center' onClick={() => navigate('/')}>
              <AiFillHome className='mr-2 place-self-center place-items-center' />Home
            </button>

            
            <button className={`btn btn-primary w-4/5 self-center md:invisible`}>
            
              <AiFillStar className='mr-2' /><p className='text-sm font-semibold'>Favorite</p>
            </button>
          </div>


        </div>



      </div>
      {/* <div className='z-10 absolute right-5  bottom-5'>
      <AiFillHome/>
      </div> */}
      {/* <Navbar/> */}
    </>
  )
}

export default Detail