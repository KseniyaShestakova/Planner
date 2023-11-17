import React from "react";
import { useState } from "react";
import NameSurname from "./centerPanel/NameSurname";
import DateTime from "./centerPanel/Date";
import Table from "./centerPanel/Table";


const CenterPanel = (props) => {
    

    return(
        <div className="center_panel">
            <NameSurname/>
            <DateTime/>
            <Table/>
            
        </div>
    )
}

export default CenterPanel;
