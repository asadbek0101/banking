import React from "react";


export default function DesktopMenu(){
    return (
        <div className="bg-success w-25 vh-100 mt-1">
            <div className="d-flex flex-column p-3 gap-2">
                <span className="fs-6 text-light">Pending Approvals</span>
                <span className="fs-6 text-light">Accounts</span>
                <span className="fs-6 text-light">Transfers</span>
                <span className="fs-6 text-light">Conversition</span>
            </div>
        </div>
    )
}