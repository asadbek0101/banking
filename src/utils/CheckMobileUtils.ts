import { useEffect, useState } from "react";


export function CheckMobileUtils(){
    const match = () => {
        if(!window.matchMedia){
            return false;
        }else if(window.matchMedia("(max-width: 320px)").matches){
            return "320";
        }else if(window.matchMedia("(max-width: 480px)").matches){
            return "480";
        }else if(window.matchMedia("(max-width: 768px)").matches){
            return "768";
        }
    }
    const [value, setValue] = useState(match);
    useEffect(()=>{
        const handler = () => setValue(match);
        window.addEventListener("resize", handler)
    },[match])

    return value;
}