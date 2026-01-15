import React from 'react'
import useCounter from './counterHooks'
import useFetch from './useFetch';

const Practice2 = () => {

    const { count, increment, decrement } = useCounter(6);

    const { data: oiui0k } = useFetch("https://jsonplaceholder.typicode.com/posts")
    const { data: lpkjpllk } = useFetch("https://jsonplaceholder.typicode.com/comments")

    console.log(oiui0k, lpkjpllk);


    return (
        <div>

            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

        </div>
    )
}

export default Practice2
