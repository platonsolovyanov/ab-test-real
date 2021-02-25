import React from 'react'
import { PostButtonContainer } from '../container/PostButtonContainer'
import { useSelector } from 'react-redux';

export const PostButtonComponent = () => {
    const users = useSelector(({ tableReducer }) => tableReducer.users)

    const postButton = () => {
        fetch('https://ab-test-database.herokuapp.com/api/post', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(users),
        }).then((data) => data.json());

        if (users.length !== 0) {
            setTimeout(() => {
                window.location.reload()
            }, 300)
        }
    }
    return (
        <div>
            <PostButtonContainer fetchFunc={(users) => { postButton(users) }} />
        </div>
    )
}
