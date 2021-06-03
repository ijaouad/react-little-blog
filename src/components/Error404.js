import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {
    return (
        <div className="not-found">
            <h2>Error404</h2>
            <p>Can't find the page you're looking for :(</p>
            <Link to="/">Take Me Home</Link>
        </div>
    )
}
