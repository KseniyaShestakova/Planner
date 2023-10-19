import React from "react";
import { useState } from "react";
import Planner from "./icons/PlannerIcon";
import DisplayStat from "./icons/DisplayStat";
import DateTime from "./centerPanel/Date";


const RightPanel = () => {
    return(
        <div className="right_panel">
            <Planner/>
            <DisplayStat/>
        </div>
    )
}

export default RightPanel;