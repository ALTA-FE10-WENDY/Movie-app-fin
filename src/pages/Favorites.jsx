import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Cardfav from '../components/CardFav';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCountContext } from '../context/context'
import { useSelector } from 'react-redux'

import { AiFillStar } from 'react-icons/ai'

function Favorites() {
    const { toggle, handleTheme } = useCountContext()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const favorite = useSelector((state) => { return state.balance })

    const handleDetail = (item) => {
        navigate('/detail',
            {
                state: {
                    item: item,
                }
            })
    }

    return (
        <>
            <Navbar />
            <div className={`flex flex-col pl-[10%] pr-[10%] pt-5 pb-5 bg-gradient-to-b min-h-screen ${toggle ? `from-indigo-500 via-purple-500 to-pink-500 ` : `from-sky-500 via-teal-500 to-green-500`}`}>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6'>
                    {
                        favorite.map((item) => {
                            return (
                                < div key={item.id} >
                                    <Cardfav
                                        title={item.title}
                                        image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                        onClick={() => handleDetail(item)}
                                        rating={item.vote_average}
                                        backdrop_path={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                                        e={item}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Favorites