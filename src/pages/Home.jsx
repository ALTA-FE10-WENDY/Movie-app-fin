import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCountContext } from '../context/context'
import { useSelector } from 'react-redux'

// import env from 'react-dotenv'

import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'

function Home() {
    const [news, setNews] = useState([]);
    const [cookies, setCookie] = useCookies();

    const [deleted, setDeleted] = useState(false)

    const navigate = useNavigate()

    const { toggle, handleTheme } = useCountContext()

    // const handleSubmit = {event} => {
    //     setCookie("Name", name, {path: "/home"});
    //     setCookie("Password", name, {path: "/home"});
    // alert(name);
    // event.preventDefault();
    // navigate("/home")
    // }

    const baseUrl = `
    https://api.themoviedb.org/3/movie/now_playing?api_key=`

    const getNews = () => {
        axios
            .get(baseUrl + `${import.meta.env.VITE_API_KEY}`)
            .then((response) => {
                console.log(response.data)
                setNews(response.data.results)
            })
            .catch((error) => console.log(error))
    }

    const handleDetail = (item) => {
        navigate('/detail',
            {
                state: {
                    item: item,
                }
            })
    }

    const favorite = useSelector((state) => state.favorite)
    console.log(favorite)

    useEffect(() => {
        getNews();
    }, []);
    //from-sky-500 via-teal-500 to-green-500
    //from-indigo-500 via-purple-500 to-pink-500
    return (
        <>
            <Navbar />
            <div className={`flex flex-col pl-[10%] pr-[10%] pt-5 pb-5 bg-gradient-to-b ${toggle ? `from-indigo-500 via-purple-500 to-pink-500 ` : `from-sky-500 via-teal-500 to-green-500`}`}>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                    {
                        news.map((item,deleted) => {
                            return (
                                < div key={item.id} >
                                    <Card
                                        title={item.title}
                                        image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                        onClick={() => handleDetail(item)}
                                        rating={item.vote_average}
                                        backdrop_path={item.backdrop_path}
                                        event={item}
                                        deleted = {deleted}
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

export default Home