import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
    users: []
}

export const addUser = createAction('ADD_USER')
export const getResponse = createAction('GET_RESPONSE')

export const tableReducer = createReducer(initialState, {
    [getResponse]: function (state, action) {
        return state = { ...state, users: action.payload }
    },
    [addUser]: function (state, action) {
        return state = { ...state, users: [...state.users, action.payload] }
    }
})
