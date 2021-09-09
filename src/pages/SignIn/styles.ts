import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.secondary.main,
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    width: '50%',
    height: '100vh',
    background: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    width: '400px',
    fontSize: '22px',
    fontFamily: 'Poppins',
    fontWeight: 400,
    color: '#FFFFFF',
    paddingTop: '50px',
  },
  forms: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formHeading: {
    width: '200px',
    fontSize: '22px',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 400,
    color: '#7C7C7C',
    paddingTop: '30px',
  },
}));
