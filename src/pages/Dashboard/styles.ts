import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: theme.spacing(28),
    marginRight: theme.spacing(28),
    marginTop: '-50px',
  },
  inputBlock: {
    width: '100%',
    '& input': {
      background: '#FFFFFF',
    },
  },
}));
