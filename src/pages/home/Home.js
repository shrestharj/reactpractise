import React, { useEffect, useState } from 'react'

const Home = () => {
    const [data, setData] = useState([]);


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
                        console.log(index +"this is " + arr)
                    }
                    return <p>{index} {item.title}</p>

                    
                }

                )
            }
        </div>
    )
}

export default Home
