import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const FavouriteMovies = () => {

    const [movieLists, setMovieLists] = useState([]);

    useEffect(() => {
        getAllFavouriteMovies()
    }, [])

    const getAllFavouriteMovies = () => {
        axios.get(`http://localhost:8000/movie/`).then((res) => {
            setMovieLists(res.data)
        }).catch((err) => console.log(err));
    }
    return (
        <>
            <div className='container pt-4'>
                <div className='text-center pt-5'>
                    <h5>Your Favourite Movies!</h5>
                </div>
                <div className='row'>
                    {movieLists.map((movie, i) => (
                        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 pt-5' key={i}>
                            <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                                <div className='text-center pb-3'>
                                    <img className='img-fluid p-3' src={movie.poster} style={{ minHeight: '266px', maxHeight: '266px' }} />
                                    <p>Title: {movie.title}</p>
                                    <p>Type: {movie.type}</p>
                                    <p>Year: {movie.year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
