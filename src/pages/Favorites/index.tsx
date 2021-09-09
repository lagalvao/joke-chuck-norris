import React from 'react';

import Header from '../../components/Header';
import List from '../../components/List';

import { useStyles } from './styles';

const Favorites: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header text="Verique sua lista de piadas favoritas" />

      <List />
    </div>
  );
};

export default Favorites;
