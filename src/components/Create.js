import React, { useState } from 'react'
import { useHistory } from 'react-router';

export const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('YAQUT');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        const blog = { title, body, author};
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text"  required value={title} onChange={(event) => setTitle(event.target.value)}/>
                <label>Body:</label>
                <textarea rows="10" required onChange={(event) => setBody(event.target.value)}></textarea>
                <label>Author:</label>
                <select value={author} onChange={(event) => setAuthor(event.target.value)}>
                    <option value="JAOUAD">JAOUAD</option>
                    <option value="YAQUT">YAQUT</option>
                    <option value="AYA">AYA</option>
                </select>
                {isPending ? <button disabled>Adding...</button> : <button>Add Blog</button>}
            </form>
        </div>
    )
}
