import AppSvgIcon from "@/components/AppSvgIcon";
import React, { useEffect, useState } from "react";
import { ReactComponent as iconBlingChild } from '@/assets/icons/blingChlid.svg'
import useStyles from "./ShowBling.styles";

const generateRandomBottom = () => Math.random() * 10 + 30;
const generateRandomBottom1 = () => Math.random() * 10 + 15;
const generateRandomBottom2 = () => Math.random() * 10 + 20;
const generateRandomLeft = () => Math.random() * 100 + 100;

const ShowBling = () => {
  const {classes}= useStyles()
  const [blingIcons, setBlingIcons] = useState<any[]>([])
  const [blingIcons1, setBlingIcons1] = useState<any[]>([])
  const [blingIcons2, setBlingIcons2] = useState<any[]>([])
  
    useEffect(() => {
        const icons = [];
        const icons2 = [];
        const icons1 = [];
        for (let i = 0; i < 40; i++) {
          icons.push({
            bottom: generateRandomBottom(),
            left: generateRandomLeft(),
          });
          icons1.push({
            bottom: generateRandomBottom1(),
            left: generateRandomLeft(),
          });
          icons2.push({
            bottom: generateRandomBottom2(),
            left: generateRandomLeft(),
          });
        }
        setBlingIcons(icons);
        setBlingIcons1(icons1);
        setBlingIcons2(icons2);
      }, [])

    return (
      <div className={classes.contentBling}>
        {blingIcons.map((icons, index) => (
          <AppSvgIcon
            key={index}
            component={iconBlingChild}
            className={classes.bling}
            style={{ bottom: `${icons.bottom}%`, left: `${icons.left}%` }}
          />
        ))}
        {blingIcons1.map((icons, index) => (
          <AppSvgIcon
            key={index}
            component={iconBlingChild}
            className={classes.bling}
            style={{ bottom: `${icons.bottom}%`, left: `${icons.left}%` }}
          />
        ))}
        {blingIcons2.map((icons, index) => (
          <AppSvgIcon
            key={index}
            component={iconBlingChild}
            className={classes.bling}
            style={{ bottom: `${icons.bottom}%`, left: `${icons.left}%` }}
          />
        ))}
      </div>
    )
  }
export default ShowBling;