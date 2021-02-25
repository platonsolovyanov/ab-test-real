import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
    calculateSevenDays: 0
}

export const calculate = createAction('CALCULATE')


export const buttonReducer = createReducer(initialState, {
    [calculate]: function (state, action) {
        return state = { ...state, calculateSevenDays: action.payload }
    },
})