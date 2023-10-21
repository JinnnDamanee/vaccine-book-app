import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./features/bookingSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        bookingSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 
export const useAppSelecter: TypedUseSelectorHook<RootState> = useSelector
