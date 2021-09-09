import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import List from '../../components/List';

import { useStyles } from './styles';

const Dashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header text="Filtre piadas ou visualize abaixo" />

      <div className={classes.filter}>
        <div className={classes.inputBlock}>
          <Input type="number" placeholder="Quantidade" />
        </div>
        <div className={classes.inputBlock}>
          <Input placeholder="Nome" />
        </div>
        <div className={classes.inputBlock}>
          <Input placeholder="Categoria" />
        </div>
      </div>

      <List />
    </div>
  );
};

export default Dashboard;
