import { useEffect, useRef } from "react";

interface VideoPlayerProps {
    vdoSrc: string;
    isPlaying: boolean;
}

const VideoPlayer = ({ vdoSrc, isPlaying }: VideoPlayerProps) => {
    const vdoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isPlaying) {
            vdoRef.current?.play();
        } else {
            vdoRef.current?.pause();
        }
    }, [isPlaying])

    return (
        <video className="w-[30%]"
            src={vdoSrc} ref={vdoRef} loop muted />
    )

}
export default VideoPlayer;