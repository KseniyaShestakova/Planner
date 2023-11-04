import React from "react";
import classes from "./NameSurname.module.css"

const NameSurname = () => {
    return(
        <div className={classes.nameSurname}>
            <div className={classes.textDiv}>
                Kseniya Shastakova
            </div>
            <button className={classes.logOutButton}>
                Log Out
            </button>
        </div>
    )
}

export default NameSurname;