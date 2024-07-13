import { FONT_MANIFEST } from "next/dist/shared/lib/constants"
import { makeStyles } from "tss-react/mui"


const useStyles = makeStyles({
  name: "HeaderMobile",
})(theme => {
  return {
    root: {
      backgroundColor: 'white',
      height: 'max-content',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      padding: '43px 112px',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    containerHeader: {
      display: 'flex',
      flexDirection: 'row',
      height: 'auto',
    },
    logo: {
      width: '100px',
      height: '46px'
    },
    text: {
      fontFamily: 'Open Sans',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '0.25px',
      textTransform: 'uppercase',
      color: 'rgba(38, 38, 38, 1)',
      cursor: 'pointer'
    }
  }
})

export default useStyles
