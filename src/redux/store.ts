import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./features/bookingSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {key:'rootPersist',storage:storage}

const rootReducer = combineReducers({bookingSlice})
const persistedReducer  = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 
export const useAppSelecter: TypedUseSelectorHook<RootState> = useSelector
