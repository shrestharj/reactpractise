import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const [data, setData] = useState([])

    const comments = useSelector(state => state?.commentdata.commentList)

    console.log(comments.length)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(res => res.json())
            .then(abc => setData(abc))
    }, [])

    return (
        <div>
            <h1>Hello this is my nextjs practise project</h1>

            {comments && comments.map((item) => (
                <p key={item.id}>{item.email}</p>
            ))}
        </div>
    )
}

export default Home
