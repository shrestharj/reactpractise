import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { commentAction } from '../../redux/action/commentAction';

const Comment = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(data => dispatch(commentAction(data)))
    }, [dispatch]) // Added dispatch to the dependency array as a best practice

    return (
        <div>
            <h1>this is comment page</h1>
        </div>
    )
}

export default Comment