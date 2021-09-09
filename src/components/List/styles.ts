import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  list: {
    marginLeft: theme.spacing(28),
    marginRight: theme.spacing(28),
    marginTop: theme.spacing(10),

    '& ul': {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'row',
    },
  },
  headerList: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),

    '& li': {
      color: '#7C7C7C',
      fontSize: '17px',
      fontFamily: 'Poppins',
    },
  },
  itemList: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#FFFFFF',
    padding: theme.spacing(3),
    borderRadius: 10,

    '& li': {
      color: '#7C7C7C',
      fontSize: '18px',
      fontFamily: 'Poppins',
      fontWeight: 700,
    },
    '&:hover': {
      background: '#e4e4e4',
    },
    '& li button': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));
