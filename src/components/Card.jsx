import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFavorite } from '../features/balanceSlice';
import { deleteFavorite } from '../features/balanceSlice';

const Cardfav = ({ title, rating, image, onClick, event, e,backdrop_path }) => {
  const [value, setValue] = useState("");
  

  const dispatch = useDispatch();



  const onSubmit = ({ event }) => {
    dispatch(addFavorite({
      id: event.id,
      title: event.title,
      overview: event.overview,
      poster_path: event.poster_path,
      rating: event.vote_average,
      backdrop_path: event.backdrop_path
    }));
    setValue("");
  };

  const onDelete = ({ e }) => {
    dispatch(deleteFavorite({ id: e.id }))
  }

  return (
    <div className="card card-compact w-full bg-black bg-opacity-30 shadow-xl outline-1 outline-dashed">
      <figure className='object-scale-down relative group' >
        <img src={image} alt="image failed to load" className='object-scale-down group-hover:opacity-30' onClick={onClick} />

        <button className={`btn btn-primary w-4/5 opacity-0 group-hover:opacity-100 absolute`} onClick={() => onSubmit({ event })}>
          <AiFillStar className='mr-2' /><p className='text-sm font-semibold'>Favorite</p>
        </button>

      </figure>
      <div className="card-body">
        <p className="card-title text-sm sm:text-base truncate">{title}</p>
        <p className='flex items-center h-5'><AiFillStar className='mr-1' /> {rating} / 10</p>
      </div>
    </div>
  )
}

export default Cardfav
