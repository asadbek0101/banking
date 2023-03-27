import React from "react";


export default function DesktopHeader(){
    return (
        <header className="bg-success text-light p-3 d-flex justify-content-between align-items-center">
            <span>Internet Banking</span>
            <div className="d-flex justify-content-between gap-2">
            <span>ibankuser401</span>
            <span>Logout</span>
            </div>
        </header>
    )
}