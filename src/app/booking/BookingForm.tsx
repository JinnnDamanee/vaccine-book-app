'use client'

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Link from "next/link";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from "react";
import { IBookingItem } from "@/interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookingSlice";
import { Dayjs } from "dayjs";

type TBookingForm = Omit<IBookingItem, 'pickUpDate'> & { pickUpDate: Dayjs | null }

const initialBooking: TBookingForm = {
    firstName: '',
    lastName: '',
    nid: '',
    hospital: 'Chulalongkorn Hospital',
    pickUpDate: null
}

const BookingForm = () => {
    const [booking, setBooking] = useState<TBookingForm>(initialBooking);
    const dispatch = useDispatch<AppDispatch>();

    const onSubimitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (booking.nid && booking.firstName && booking.lastName && booking.hospital && booking.pickUpDate) {
            dispatch(addBooking({
                firstName: booking.firstName,
                lastName: booking.lastName,
                nid: booking.nid,
                hospital: booking.hospital,
                pickUpDate: booking.pickUpDate.format('DD/MM/YYYY')
            }));
            alert('Booking Success');
        } else {
            alert('Please fill all fields');
        }
    }

    return (
        <form onSubmit={(e) => onSubimitHandler(e)}>
            <div>
                <h1 className="text-3xl font-semibold leading-9 text-indigo-600">Booking Form</h1>
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    value={booking.firstName}
                                    onChange={(e) => setBooking({ ...booking, firstName: e.target.value })}
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    value={booking.lastName}
                                    onChange={(e) => setBooking({ ...booking, lastName: e.target.value })}
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Thai National ID
                            </label>
                            <div className="mt-2">
                                <input
                                    value={booking.nid}
                                    onChange={(e) => setBooking({ ...booking, nid: e.target.value })}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Hospital
                            </label>
                            <div className="mt-2">
                                <select
                                    value={booking.hospital}
                                    onChange={(e) => setBooking({ ...booking, hospital: e.target.value })}
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value={'Chulalongkorn Hospital'}>Chulalongkorn Hospital</option>
                                    <option value={'Rajavithi Hospital'}>Rajavithi Hospital</option>
                                    <option value={'Thammasat University Hospital'}>Thammasat University Hospital</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Pick Up Date"
                                    value={booking.pickUpDate}
                                    onChange={(e) => setBooking({ ...booking, pickUpDate: e })}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    <Link href={'/'}>
                        Back
                    </Link>
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Book Vaccine
                </button>
            </div>
        </form>
    )
}
export default BookingForm;