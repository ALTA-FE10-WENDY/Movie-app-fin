import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCountContext } from '../context/context'

import { AiFillFire, AiOutlineSearch, AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { BsLayersHalf } from "react-icons/bs";

function Navbar() {
    const navigate = useNavigate()
    const { toggle, handleTheme } = useCountContext()

    return (
        <>
            <div className={`navbar w-full justify-items-start  sticky top-0 z-50  h-[5%] pr-[10%] pl-[10%] ${toggle ? `bg-indigo-500` : `bg-sky-500`}`}>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl" onClick={() => navigate('/')}>
                        <IconContext.Provider value={{ color: "orange", className: "global-class-name" }}>

                            <AiFillFire />
                            Fireapp
                        </IconContext.Provider></a>
                </div>
                <div className="flex-none ">
                    <ul className="menu menu-horizontal p-0">
                        <li><a className='text-xl flex-none' onClick={() => handleTheme()}><BsLayersHalf /><p className='hidden sm:flex'>Change Theme</p></a></li>
                        <li><a className='text-xl flex-none' onClick={() => navigate('/favorites')}><AiFillStar /><p className='hidden sm:flex'>Favorites</p></a></li>

                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar

