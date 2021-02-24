import React from 'react'
import { DeleteButtonContainer } from '../container/DeleteButtonContainer'
// import { useSelector } from 'react-redux';

export const DeleteButtonComponent = () => {
    // const users = useSelector(state => state.rows.users)

    const deleteButton = () => {
        fetch('http://localhost/delete', {
            method: 'DELETE',
        })
            // .then(res => res.text()) // or res.json()
            .then(res => console.log(res))

        window.location.reload();

    }
    return (
        <div>
            <DeleteButtonContainer fetchFunc={(users) => { deleteButton() }} />
        </div>
    )
}