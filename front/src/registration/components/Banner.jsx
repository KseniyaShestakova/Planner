import React from "react";
import classes from "./Banner.module.css"

const  Banner = () => {
    return(
        <div className={classes.banner}>
            <div className={classes.lettering}>Start now!</div>
            <div className={classes.lettering}>Change your future with</div>
            <div className={classes.icon}>Planner</div>
        </div>
    )
}

export default Banner;