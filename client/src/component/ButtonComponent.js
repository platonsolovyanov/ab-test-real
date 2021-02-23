import React from 'react'
import { ButtonContainer } from '../container/ButtonContainer'
import { useSelector } from 'react-redux';

export const ButtonComponent = () => {
    const users = useSelector(state => state.rows.users)

    const postButton = () => {
        fetch('http://localhost/post', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(users),
        }).then((data) => data.json());

    }
    return (
        <div>
            <ButtonContainer postButton={(users) => { postButton(users) }} />
        </div>
    )
}
