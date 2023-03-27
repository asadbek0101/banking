import React from "react";
import { CheckMobileUtils } from "../../utils/CheckMobileUtils";
import DesktopHeader from "../header/DesktopHeader";
import MobileHeader from "../header/MobileHeader";

interface Props{
    readonly setStatus: () => void;
}

export default function AppHeaderWrapper({setStatus}:Props){

    const matches = CheckMobileUtils();

    return (
    <div>
        {!matches?(
            <DesktopHeader/>
        ):(
            <MobileHeader setStatus={setStatus}/>
        )}
    </div>
    )
}