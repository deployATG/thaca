/* eslint-disable @next/next/no-img-element */
import { Box, Button, Grid, NoSsr } from "@mui/material"
import useStyles from "./Home.styles"
import React, { Fragment, useEffect, useRef, useState } from "react"
import { observer } from "mobx-react"
import HeaderMobile from "../components/HeaderMobile"
import AppSvgIcon from "@/components/AppSvgIcon"
import { ReactComponent as iconFish } from '@/assets/icons/fish.svg'
import AppSvgIconWithRef from "@/components/AppSvgIcon"
import ShowBling from "../components/ShowBling"
import { Howl } from 'howler';
import { ReactComponent as icLogo } from "@/assets/icons/logoAtgBlack.svg"
import { gotoPage } from "@/utils/helpers/common"


type MenuLeftType = {
  childrenChild?: React.ReactNode
}

const Home = (props: MenuLeftType) => {
  const { childrenChild, ...rest } = props
  const { classes, cx } = useStyles()
  const [isClickAnimation, setIsClickAnimation] = useState(false)
  const [isClickAnimationWave, setIsClickAnimationWave] = useState(false)
  const elemRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef1 = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [opacityButton, setOpacityButton] = useState(1);
  const sound = new Howl({
    src: ['/image/icons/audioWater.mp3'],
    html5: true,
    volume: 0.2
  })

  let start: number | undefined;

  const debug = (timestamp: number) => {
    if (start === undefined) start = timestamp;
    const elapsed = timestamp - start;

    if (elapsed < 4000) {
      window.requestAnimationFrame(debug);
    }
  };

  const handleAnimationEnd = () => {
    sound.play();

    if (elemRef.current) {
      elemRef.current.classList.remove(classes.start)
      setIsClickAnimation(false);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsClickAnimationWave(false)
      sound.stop();
    }, 1000);
  }
  const handleUpOpacity = () => {
    setOpacityButton(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setOpacityButton(prev => {
        if (prev < 1) {
          return prev + 0.1;
        }
        else {
          clearInterval(intervalRef.current!);
          return 1;
        }
      })
    }, 200)
  }
  const handleClick = () => {
    handleUpOpacity()
    if (elemRef.current && isClickAnimation) {
      if (timeoutRef1.current) {
        clearTimeout(timeoutRef1.current);
      }
      timeoutRef1.current = setTimeout(() => {
        setIsClickAnimationWave(true)
      }, 1000);

      elemRef.current.classList.add(classes.start);
      window.requestAnimationFrame(debug);
      elemRef.current.addEventListener('animationend', handleAnimationEnd)
    } else {
      console.error('elemRef.current is null');
    }
  };


  useEffect(() => {
    isClickAnimation && handleClick()
  }, [isClickAnimation])

  return (
    <Grid container className={cx(classes.root)}>
      {/* <HeaderMobile /> */}
      <AppSvgIcon component={icLogo} className={classes.logo} onClick={() => gotoPage('https://www.atg-technology.com/')}/>
      <div className={classes.containerBody}>
        <img src="/image/icons/bgNohand.png" alt="" className={classes.imgBg1} />
        <div className={classes.contentHands} >
          <div className={classes.content} >
            <img src="/image/icons/hands.png" alt="" className={classes.hands} />
            <i ref={elemRef} className={isClickAnimation ? classes.iActivities : classes.i} >
              <AppSvgIconWithRef component={iconFish} className={isClickAnimation ? classes.iconFishActivities : classes.iconFish} />
            </i>
          </div>
        </div>
        <img src="/image/icons/bush.png" alt="" className={classes.bush} />
        <ShowBling />
        {isClickAnimationWave && <div className={classes.ContentWave}>
        {/* {<div className={classes.ContentWave}> */}
          <div className={classes.content1}>
            <div className={classes.splash}></div>
            <div className={classes.wave}>
              <div></div>
              <div></div>
            </div>
            <div className={classes.particles}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>}
        <Button className={classes.Button} onClick={() => { opacityButton === 1 && setIsClickAnimation(true) }} style={{ opacity: opacityButton }}>
          <AppSvgIcon component={iconFish} className={classes.iconFishButton} />
          <span className={classes.text}>Thả cá</span>
        </Button>
      </div>
    </Grid>
  )
}

export default observer(Home)
