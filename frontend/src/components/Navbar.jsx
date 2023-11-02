import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header className='p-3 w-100' style={{ position: 'fixed', backgroundColor: 'blue' }}>
            <div className='d-flex' style={{ gap: '11px' }}>
                <Link to='/'>
                    <p style={{ color: 'white', fontWeight: 600, cursor: 'pointer' }}>Home</p>
                </Link>
                <Link to="/favouriteMovies">
                    <p style={{ color: 'white', fontWeight: 600, cursor: 'pointer' }}>Favourites</p>
                </Link>
            </div>
        </header>
    )
}
