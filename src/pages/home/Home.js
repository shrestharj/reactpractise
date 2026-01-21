import React, { useEffect, useReducer, useState } from 'react'
import { useSelector } from 'react-redux';



const Home = () => {
    const [data, setData] = useState([]);

    const commentData = useSelector((state) => state?.commentdata);
    console.log(commentData);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(abc => setData(abc))
    }, [])
    return (
        <div>
            <h1>Hello this is my nextjs practise project</h1>

            {
                data.map((item, index, arr) => {
                    {
                        console.log(index + "this is " + arr)
                    }
                    return <p>{index} {item.title}</p>


                }

                )
            }
        </div>
    )
}

export default Home
