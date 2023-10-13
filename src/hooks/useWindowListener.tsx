'use client'

import { useEffect } from "react";

const useWindowListener = (event: string, listerner: EventListener) => {
    useEffect(() => {
        window.addEventListener(event, listerner);
        return () => {
            window.removeEventListener(event, listerner);
        }
    }, [])
}
export default useWindowListener