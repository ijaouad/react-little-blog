import React from 'react'
import { useHistory, useParams } from 'react-router'
import useFetch from '../hooks/useFetch';

export const BlogPost = () => {

    const { id } = useParams();
    const { data:blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });
    }

    return (
        <div className="blog-details"> 
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h1>{ blog.title }</h1>
                    <p><i>Written By <b>{ blog.author }</b></i></p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            ) }
        </div>
    )
}
