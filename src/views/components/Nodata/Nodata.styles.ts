import { FONT_MANIFEST } from "next/dist/shared/lib/constants"
import { makeStyles } from "tss-react/mui"


const useStyles = makeStyles({
  name: "Nodata",
})(theme => {
  return {
    root: {
      backgroundColor: 'white',
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontFamily: 'Open Sans',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '0.25px',
      textTransform: 'uppercase',
      color: 'rgba(38, 38, 38, 1)',
      cursor: 'pointer',
    }
  }
})

export default useStyles
