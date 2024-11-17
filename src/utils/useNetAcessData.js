import { useState, useEffect } from "react";

const useNetAcessData = ()=>{
    const [onLineStatus, setOnLineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnLineStatus(false);
        })
        window.addEventListener("online", ()=>{
            setOnLineStatus(true);
        })
    }, []);
    return onLineStatus;
}
export default useNetAcessData;