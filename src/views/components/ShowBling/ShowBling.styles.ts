import { commonHelpers } from "@/utils/helpers"
import { url } from "inspector"
import { keyframes } from "tss-react"
import { makeStyles } from "tss-react/mui"


const useStyles = makeStyles({
  name: "ShowBling",
})((theme, params) => {
  const moveFromRightToLeft = keyframes`
  0% {
        transform: translateX(0vw);
      };
  100% {
        transform: translateX(-200vw);
      }
  `;
  return {
    
    bling: {
      width: 18,
      height: 16,
      position: 'absolute',
      zIndex: 1,
      margin: 'auto',
      // bottom: '30%',
      animation: `${moveFromRightToLeft} 50s infinite`,
    },
    contentBling: {
      position: 'absolute',
      zIndex: 1,
      margin: 'auto',
      bottom: 0,
      height: '100%',
      width: '100%'
    },
  }
})

export default useStyles
