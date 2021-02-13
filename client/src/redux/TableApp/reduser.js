import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
    users: [
    ]
}

export const addUser = createAction('ADD_USER')
export const deleteUser = createAction('ADD_DELETE')

export const rows = createReducer(initialState, {
    [addUser]: function (state, action) {
        return state = { ...state, users: [...state.users, action.payload] }
        // console.log(action.payload)

        // state : ...state, {action.payload}
    },
    [deleteUser]: function (state, action) {
        // console.log("deleteUser")
        // console.log(action.payload)
    }
})
