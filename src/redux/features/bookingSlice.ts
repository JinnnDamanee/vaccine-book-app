import { IBookingItem } from "@/interface"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"


type BookingState = {
    bookingItems: IBookingItem[]
}
const initialState:BookingState = {
    bookingItems:[]
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<IBookingItem>) => {
            state.bookingItems = [action.payload]
        },
        removeBooking: (state, action:PayloadAction<IBookingItem>) => {
            state.bookingItems.pop()
        },
    }
})

export const { addBooking, removeBooking } = bookingSlice.actions
export default bookingSlice.reducer


