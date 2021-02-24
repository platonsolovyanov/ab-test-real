import React from 'react'
import { PostButtonContainer } from '../container/PostButtonContainer'
import { useSelector } from 'react-redux';

export const PostButtonComponent = () => {
    const users = useSelector(state => state.rows.users)

    const postButton = () => {
        fetch('http://localhost/post', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(users),
        }).then((data) => data.json());

        if (users.length !== 0) {
            window.location.reload()
        }
    }
    return (
        <div>
            <PostButtonContainer fetchFunc={(users) => { postButton(users) }} />
        </div>
    )
}
