import { commonHelpers } from "@/utils/helpers"
import { url } from "inspector"
import { keyframes } from "tss-react"
import { makeStyles } from "tss-react/mui"


const useStyles = makeStyles({
  name: "home",
})((theme, params) => {
  const moveFromRightToLeft = keyframes`
  0% {
        transform: translateX(0vw);
      };
  100% {
        transform: translateX(-200vw);
      }
  `;
  const x = keyframes`
    to {
      right: 55%;
    }
  `;
  const y = keyframes`
    to {
     bottom: 19.5px;
    }
  `
  const shrink = keyframes`
    from {
       transform: scale(1)
      }
    to {
      transform: scale(0)
    }
  `
  const splashAnimation = keyframes`
  0% {
		transform: scale(0.3, 0);
	}

	49% {
		transform: scale(0.3, 0);
	}

	50% {
		transform: scale(0.3, 0.3);
	}

	60% {
		transform: scale(0.7, 1);
	}

	90% {
		transform: scale(1, 0);
	}

	100% {
		transform: scale(1, 0);
	}
  `
  const jumpLeft = keyframes`
   0%{
		transform: translate(0,0) scale(0);
	}

	45%{
		transform: translate(0,0) scale(0);
	}

	60%{
		transform: translate(-50px, -90px) scale(1);
	}

	100%{
		transform: translate(-60px, 0px) scale(0.1);
	}
  `
  const jumpRight = keyframes`
   0%{
		transform: translate(0,0) scale(0);
	}

	45%{
		transform: translate(0,0) scale(0);
	}

	60%{
		transform: translate(30px, -80px) scale(1);
	}

	100%{
		transform: translate(50px, 0px) scale(0.1);
	}
  `
  const spread = keyframes`
  0% {
		transform: scale(0);
		opacity: 1;
	}
	40% {
		transform: scale(0);
		opacity: 1;
	}

	100% {
		transform: scale(1);
		opacity: 0;
	}
  `
  return {
    root: {
      height: "100%",
      width: "100%",
      overflow: "hidden",
      position: "relative",
      backgroundColor: 'white',
    },
    containerBody: {
      width: '100%',
      // height: 'max-contain',
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    imgBg1: {
      width: '100%',
      // height: '100%',
      height: '100vh',
      objectFit: 'fill',
      zIndex: 0,
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        height: '100vh'
      },
      [theme.breakpoints.down('lg')]: {
        height: '100vh'
      }
    },
    contentHands: {
      position: 'absolute',
      width: '100%',
      height: '40%',
      zIndex: 2,
      display: 'block',
      bottom: 0,
    },
    hands: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 2,
      display: 'block',
      bottom: 0,
      right: 0,
      [theme.breakpoints.down('lg')]: {
        height: '60%',
        width: '90%'
      },
      [theme.breakpoints.down('md')]: {
        height: '45%',
        width: '80%'
      },

    },
    bush: {
      position: 'absolute',
      width: '30%',
      height: '30%',
      zIndex: 2,
      display: 'block',
      bottom: 0,
      left: 0
    },
    divFish: {
      position: 'fixed',
      zIndex: 5,
      width: '100%',
      height: '100%',
      // marginLeft: 237,
      // marginBottom: 30,
      backgroundColor: 'red',
    },
    iconFish: {
      zIndex: 5,
      width: 112,
      height: 207,
      [theme.breakpoints.down('lg')]: {
        width: 81,
        height: 150
      },
      [theme.breakpoints.down('md')]: {
        width: 41,
        height: 78
      },
      [theme.breakpoints.down(325)]: {
        width: 31,
        height: 68
      },
    },
    content: {
      position: 'absolute',
      width: '40%',
      height: '100%',
      zIndex: 2,
      right: 0,
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    Button: {
      position: 'absolute',
      bottom: 0,
      margin: 'auto',
      left: '50%',
      backgroundColor: 'rgba(148, 240, 255, 1)',
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      cursor: 'pointer',
      zIndex: 5,
      "&:hover": {
        backgroundColor: 'rgba(148, 240, 255, 1)',
      },
      [theme.breakpoints.down('md')]: {
        left: '45%',
        width: '60px',
        height: '60px',
      },
      [theme.breakpoints.down(700)]: {
        left: '45%',
        width: '80px',
        height: '80px',
      },
      [theme.breakpoints.down(380)]: {
        left: '43%',
        width: '70px',
        height: '70px',
      },
    },
    iconFishButton: {
      width: 112 - 70,
      height: 207 - 70,
      opacity: 0.4
    },
    text: {
      fontFamily: 'Open Sans',
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '24px',
      letterSpacing: '0.25px',
      textTransform: 'uppercase',
      color: 'rgba(38, 38, 38, 1)',
      position: 'absolute',
      [theme.breakpoints.down('md')]: {
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: '24px',
      },
      [theme.breakpoints.down(380)]: {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '24px',
      }
    },
    start: {
      animation: `${x} 2s linear 1 alternate, ${y} 2s 1 cubic-bezier(0, -2000, 1, -200)`
    },
    i: {
      position: 'absolute',
      zIndex: 5,
      marginLeft: '35%',
      [theme.breakpoints.down('md')]: {
        marginLeft: '45%'
      },
      [theme.breakpoints.down(600)]: {
        marginBottom: '10%',
        marginLeft: '45%'
      },
      [theme.breakpoints.down(350)]: {
        marginBottom: '5%',
        marginLeft: '45%'
      },
    },
    iActivities: {
      position: 'fixed',
      zIndex: 5,
      right: '20%',
      bottom: '20px',
    },
    iconFishActivities: {
      zIndex: 5,
      width: 112,
      height: 207,
      animation: `${shrink} 2s linear 1 forwards`,
      [theme.breakpoints.down('lg')]: {
        width: 81,
        height: 150
      },
      [theme.breakpoints.down('md')]: {
        width: 41,
        height: 78
      },

    },
    ContentWave: {
      position: 'absolute',
      display: 'flex',
      width: '100%',
      height: '85%',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    splash: {
      position: 'absolute',
      width: 100,
      height: 100,
      bottom: '10%',
      left: '40%',
      borderRadius: '8px',
      clipPath: 'polygon(7% 100%, 5% 95%, 3% 80%, 11% 50%, 17% 38%, 23% 44%, 30% 53%, 37% 28%, 40% 29%, 45% 43%, 51% 53%, 59% 36%, 64% 22%, 67% 23%, 70% 34%, 72% 46%, 79% 37%, 83% 37%, 93% 61%, 96% 76%, 96% 94%, 94% 100%)',
      backgroundColor: 'white',
      transformOrigin: 'bottom',
      animation: `${splashAnimation} 2s infinite ease-out`,
      [theme.breakpoints.down('lg')]: {
        left: '35%',
      },
      [theme.breakpoints.down('md')]: {
        left: '40%',
        bottom: '5%',
        width: 80,
        height: 80,
      },
      [theme.breakpoints.down(700)]: {
        width: 50,
        height: 50,
        left: '35%',
        bottom: '5%',
      },
      [theme.breakpoints.down(325)]: {
        width: 50,
        height: 50,
      },

    },
    particles: {
      position: 'absolute',
      left: '45%',
      '& > div': {
        borderRadius: '100%',
        backgroundColor: 'white',
      },
      '& > div:nth-of-type(1)': {
        width: '7px',
        height: '7px',
        top: '50%',
        left: '50%',
        animation: `${jumpLeft} 2s infinite ease-out`,
      },
      '& > div:nth-of-type(2)': {
        width: '5px',
        height: '5px',
        top: '30%',
        left: '30%',
        animation: `${jumpLeft} 2s infinite ease-out`,
        animationDelay: 'calc(var(--delay) + 0.1s)',
      },
      '& > div:nth-of-type(3)': {
        width: '3px',
        height: '3px',
        top: '20%',
        left: '70%',
        animation: `${jumpRight} 2s infinite ease-out`,
        animationDelay: 'calc(var(--delay) + 0.15s)',
      },
      '& > div:nth-of-type(4)': {
        width: '5px',
        height: '5px',
        top: '30%',
        left: '50%',
        animation: `${jumpRight} 2s infinite ease-out`,
        animationDelay: 'calc(var(--delay) + 0.3s)',
      }
    },
    wave: {
      '& > div': {
        position: 'absolute',
        width: 300,
        height: 200,
        left: '34%',
        bottom: '-6%',
        borderRadius: '50%',
        border: 'solid white 3px',
        animation: `${spread} 2s infinite ease-out`,
        [theme.breakpoints.up(1800)]: {
          left: '34.5%'
        },
        [theme.breakpoints.down('md')]: {
          width: 200,
          height: 100,
          bottom: '-3%',
          left: '33%',
        },
        [theme.breakpoints.down(700)]: {
          width: 200,
          height: 100,
          bottom: '-2%',
          left: '27%',
        },
        [theme.breakpoints.down(500)]: {
          left: '25%',
        },
        [theme.breakpoints.down(400)]: {
          left: '23%',
        },
        [theme.breakpoints.down(325)]: {
          width: 150,
          height: 75,
          left: '20%',
        },
      },
      '& > div:nth-of-type(2)': {
        animationDelay: 'calc(var(--delay) + 0.5s)',
        animationTimingFunction: 'linear'
      }
    },
    ContentWaveAndParticles: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
})

export default useStyles
