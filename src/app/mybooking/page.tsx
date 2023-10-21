'use client'

import { IBookingItem } from "@/interface";
import { removeBooking } from "@/redux/features/bookingSlice";
import { AppDispatch, useAppSelecter } from "@/redux/store"
import { useDispatch } from "react-redux";

const myBookingPage = () => {
    const bookings = useAppSelecter((state) => state.bookingSlice.bookingItems);
    const dispatch = useDispatch<AppDispatch>()

    const removeHandler = (currBook: IBookingItem) => {
        dispatch(removeBooking(currBook))
    }
    return (
        <main className="h-[800px] flex items-center flex-col gap-4 mt-24">
            {
                bookings.length > 0 ? <>
                    {
                        bookings.map((currBook, idx) =>
                            <div key={idx} className="bg-white mx-auto shadow-2xl p-5 w-fit">
                                <h1 className="text-2xl font-semibold leading- text-indigo-600 mb-2">Booked Vaccine</h1>
                                <table className="table-auto border-separate border-spacing-2">
                                    <tbody>
                                        <tr>
                                            <td className="font-bold">First Name</td>
                                            <td>{currBook.firstName}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Last Name</td>
                                            <td>{currBook.lastName}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Hospital</td>
                                            <td>{currBook.hospital}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">National ID</td>
                                            <td>{currBook.nid}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">Pick-Up Date</td>
                                            <td>{currBook.pickUpDate}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button
                                    onClick={() => removeHandler(currBook)}
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Remove Booking
                                </button>
                            </div>
                        )
                    }
                </> : <h1 className="font-semibold text-3xl">No Vaccine Booking</h1>
            }
        </main>
    )
}
export default myBookingPage