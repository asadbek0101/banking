import React from "react";


export default function MobileMenu(){
    return (
        <div className="w-100 bg-success vh-100">
            <div className="d-flex flex-column p-3 gap-2">
                <span className="fs-6 text-light fw-bold">ibankuser401</span>
            </div>
            <div className="d-flex flex-column p-3 gap-2">
                <span className="fs-6 text-light">Pending Approvals</span>
                <span className="fs-6 text-light">Accounts</span>
                <span className="fs-6 text-light">Transfers</span>
                <span className="fs-6 text-light">Conversition</span>
            </div>
            <div className="d-flex flex-column p-3 gap-2">
                <span className="fs-6 text-dark bg-light p-1 rounded ps-3">Logout</span>
            </div>
        </div>
    )
}