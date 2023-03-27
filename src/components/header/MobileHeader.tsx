import React from "react";

interface Props{
    readonly setStatus: () => void;
}

export default function MobileHeader({setStatus}:Props){
    return (
        <header className="bg-success text-light p-3 d-flex justify-content-between align-items-center">
            <span>Internet Banking</span>
            <button className="" onClick={setStatus}><i className="fa-solid fa-bars"></i></button>
        </header>
    )
}