'use client'

import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";

const PromoteCard = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    useWindowListener('contextmenu', (e: Event) => {
        e.preventDefault();
    })

    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex">
            <VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={isPlaying} />
            <div className="m-5 flex flex-col justify-between">
                <h1 className="text-3xl">Get your vaccine today</h1>
                <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        setIsPlaying(!isPlaying);
                    }}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    )
}
export default PromoteCard;