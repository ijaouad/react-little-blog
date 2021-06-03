import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><h1>LilBlog</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    )
}
