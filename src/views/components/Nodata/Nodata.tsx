import React, { Fragment, useEffect } from "react"
import useStyles from "./Nodata.styles";
import { gotoPage } from "@/utils/helpers/common";


const Nodata = () => {

    const { classes } = useStyles();
    useEffect(() => {
     const timer =  setTimeout(() => {
            gotoPage('/')
        }, 3000);

        return () => clearInterval(timer)
    }, [])

    return (
        <div className={classes.root}>
             <span className={classes.text}>Sẽ Sớm Được Ra Mắt</span>
        </div>
    )
}
export default Nodata;