import React from 'react'

export const ButtonContainer = ({ postButton }) => {
    return (
        <div>
            <button onClick={() => { postButton() }}>button</button>
        </div>
    )
}
