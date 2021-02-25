import React from 'react'
import { DeleteButtonContainer } from '../container/DeleteButtonContainer'

export const DeleteButtonComponent = () => {
    const deleteButton = () => {

        fetch('https://ab-test-database.herokuapp.com/api/delete', {
            method: 'DELETE',
        })
            .then(res => console.log(res))

        setTimeout(() => {
            window.location.reload()
        }, 300)
    }
    return (
        <div>
            <DeleteButtonContainer fetchFunc={(users) => { deleteButton() }} />
        </div>
    )
}