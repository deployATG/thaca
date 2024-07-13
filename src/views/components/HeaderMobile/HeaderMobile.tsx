import React, { Fragment } from "react"
import useStyles from "./HeaderMobile.styles";
import { dataMenu } from "./config";
import { ReactComponent as icLogo } from "@/assets/icons/logoAtgBlack.svg"
import AppSvgIcon from "@/components/AppSvgIcon";
import { gotoPage } from "@/utils/helpers/common";

const HeaderMobile = () => {

    const { classes } = useStyles();
    const handleClickMenu = (item: any) => {
        gotoPage(item.path)
    }
    return (
        <div className={classes.root}>
            {dataMenu?.map((item, index) => (
                <Fragment key={index}>
                    <div className={classes.containerHeader}>
                        <span className={classes.text} onClick={() => handleClickMenu(item)}>{item?.name}</span>
                    </div>
                    {index === 2 &&
                        <div className={classes.containerHeader}>
                            <AppSvgIcon component={icLogo} className={classes.logo} onClick={() => gotoPage('/')}/>
                        </div>
                    }
                </Fragment>
            ))}
        </div>
    )
}
export default HeaderMobile;