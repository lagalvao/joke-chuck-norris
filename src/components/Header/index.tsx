import { AppBar, Button, Toolbar } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo_light.svg';

import { useStyles } from './styles';

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  const classes = useStyles();
  const username = localStorage.getItem('@Joke:name');
  const history = useHistory();

  const handleToNavigateFavorites = useCallback(() => {
    history.push('/favorites');
  }, [history]);

  const handleToNavigateDashboard = useCallback(() => {
    history.push('/dashboard');
  }, [history]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('@Joke:name');

    history.push('/');
  }, [history]);

  return (
    <header>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src={logoImg} alt="Joke" className={classes.logo} />
          <div className={classes.grow} />
          <Button color="inherit" onClick={handleToNavigateDashboard}>
            Home
          </Button>
          <Button color="inherit" onClick={handleToNavigateFavorites}>
            Favoritos
          </Button>
          <Button
            color="inherit"
            className={classes.btnAppBar}
            onClick={handleLogout}
          >
            Sair
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <p className={classes.titleContent}>
          Olá {username},
          <strong>
            <br /> {text}
          </strong>
        </p>
      </div>
      <div />
    </header>
  );
};

export default Header;
