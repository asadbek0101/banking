import React from "react";
import { CheckMobileUtils } from "../../utils/CheckMobileUtils";
import DesktopMenu from "../menu/DesktopMenu";
import MobileMenu from "../menu/MobileMenu";

interface Props{
    readonly menuStatus: string;
}

export default function AppMenuWrapper({menuStatus}:Props){

    const matches = CheckMobileUtils();

    return (
        <div>
            {(matches && menuStatus == "opened") && (
                <MobileMenu/>
            )}
            {!matches && (
                <DesktopMenu/>
                )}
        </div>
    )
}