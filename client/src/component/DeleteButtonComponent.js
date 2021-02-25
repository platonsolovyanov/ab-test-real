import React from 'react'
import { DeleteButtonContainer } from '../container/DeleteButtonContainer'

export const DeleteButtonComponent = () => {

    const deleteButton = () => {
        fetch('http://localhost/delete', {
            method: 'DELETE',
        })
            .then(res => console.log(res))

        window.location.reload();

    }
    return (
        <div>
            <DeleteButtonContainer fetchFunc={(users) => { deleteButton() }} />
        </div>
    )
}