import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
    const [searchedMovieName, setSearchedMovieName] = useState('indian');
    const [movieLists, setMovieLists] = useState([]);

    useEffect(() => {
        searchMovie()
    }, [])

    function searchMovie() {
        if (searchedMovieName === '' || searchedMovieName.length === 0) {
            return
        }
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=c206e24f&s=${searchedMovieName}`).then((res) => {
            setMovieLists(res.data.Search)
        }).catch((err) => console.log(err));
    }

    function addToFavourite(movie) {
        axios.post('http://localhost:8000/movie/favourite/save', { movie }).then((res) => {
            toast.success("Movie added successfully in favourites list", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }, 1000);
        }).catch((err) => console.log(err));
    }
    return (
        <>
            <ToastContainer />
            <div className='container pt-4'>
                <div className='text-center pt-5'>
                    <h5>Search Movies!</h5>
                </div>
                <div className="search-movies-div d-flex justify-content-center">
                    <input className="form-control w-50" onChange={(e) => setSearchedMovieName(e.target.value)} />
                    <button className="btn btn-primary sbmt-btn" onClick={searchMovie}>Submit</button>
                </div>
                <div className='row'>
                    {movieLists?.map((movie, i) => (
                        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 pt-5' key={i}>
                            <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                                <div className='text-center pb-3'>
                                    <img className='img-fluid p-3' src={movie.Poster} style={{ minHeight: '266px', maxHeight: '266px' }} />
                                    <p>Title: {movie.Title}</p>
                                    <p>Type: {movie.Type}</p>
                                    <p>Year: {movie.Year}</p>
                                    <button className="btn btn-primary" onClick={() => addToFavourite(movie)}>Add to favourite</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
