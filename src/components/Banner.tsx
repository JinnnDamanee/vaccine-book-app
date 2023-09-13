'use client'
import Image from "next/image"
import { useState } from "react"

const Banner = () => {
    const [index, setIndex] = useState(0)
    const imageList = [
        '/img/vaccine.jpeg',
        '/img/room.jpg',
        '/img/bed.jpg',
        '/img/laptop.jpg',
    ]


    return (
        <div className='block p-5 select-none m-0 w-screen h-[50vh] relative'>
            <Image
                onClick={() => {
                    setIndex((index + 1) % imageList.length)
                }}
                src={imageList[index]}
                alt="cover"
                objectFit="cover"
                priority
                fill
            />
            <div className='text-slate-800 relative top-[60px] z-20 text-right mr-10'>
                <h1 className="text-6xl font-bold"> Getting
                    <span className="text-indigo-500">Sick</span> is not <span className="text-indigo-500">COOL ! </span>
                </h1>
                <h3 className="text-3xl font-semibold mt-4"> Book your vaccine now </h3>
            </div>
        </div>
    )
}
export default Banner