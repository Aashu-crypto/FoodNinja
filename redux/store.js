import { configureStore } from "@reduxjs/toolkit";

import screenReducer from './slice/screenNameSlice'

export const store = configureStore({
    reducer:{

        screen:screenReducer
    }
})