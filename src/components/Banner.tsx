'use client'
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Banner = () => {
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const { data: session } = useSession();

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
            <button className="bg-white text-indigo-500 border border-indigo-500
            font-semibold py-2 px-2 m-2 rounded- z-30 absolute bottom-0 right-0
            hover:bg-indigo-500 hover:text-white hover:border-white duration-200"
                onClick={(e) => { e.stopPropagation(); router.push('/hospital') }}
            >
                Go check the hospital
            </button>
            {
                session ? <div className="z-30 absolute top-5 right-10 font-semibold text-slate-800 text-xl">
                    Logged as {session.user?.name}</div>
                    : null
            }
        </div >
    )
}
export default Banner