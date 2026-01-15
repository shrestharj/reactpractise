import React, { useState } from 'react'

const useCounter = (initialVal) => {

    const [count, setCount] = useState(initialVal);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }


    return { count, increment, decrement }

}

export default useCounter


