import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#783aa2',
  },
  btnAppBar: {
    marginRight: theme.spacing(25),
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    marginLeft: theme.spacing(25),
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    height: '200px',
    background: theme.palette.primary.main,
    paddingLeft: theme.spacing(28),
  },
  titleContent: {
    fontSize: '22px',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: 400,
    marginTop: '-10px',
  },
}));
