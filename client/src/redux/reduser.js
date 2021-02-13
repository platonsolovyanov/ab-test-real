import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rows } from "./TableApp/reduser";

const rootReducer = combineReducers({
    rows: rows
})

export const store = configureStore({
    reducer: rootReducer
})


