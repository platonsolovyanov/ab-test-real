import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tableReducer } from "./TableApp/reduser";
import { buttonReducer } from './Button/reduser'

const rootReducer = combineReducers({
    tableReducer: tableReducer,
    buttonReducer: buttonReducer
})

export const store = configureStore({
    reducer: rootReducer
})


