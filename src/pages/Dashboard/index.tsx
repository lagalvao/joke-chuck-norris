import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Input from '../../components/Input';
import List, { Jokes } from '../../components/List';

import { useStyles } from './styles';

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const [jokes, setJokes] = useState([]);
  const [quantity, setQuantity] = useState(10);
  const [name, setName] = useState('');

  useEffect(() => {
    axios
      .get(`http://api.icndb.com/jokes/random/${quantity}?firstName=${name}`)
      .then((response) => {
        setJokes(response.data.value);
      });
  }, [quantity, name]);

  return (
    <div className={classes.container}>
      <Header text="Filtre piadas ou visualize abaixo" />

      <div className={classes.filter}>
        <div className={classes.inputBlock}>
          <Input
            type="number"
            placeholder="Quantidade"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className={classes.inputBlock}>
          <Input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      {quantity === 0 ? (
        <p className={classes.quantityZero}>0 piadas encontradas</p>
      ) : (
        <List jokes={jokes} />
      )}
    </div>
  );
};

export default Dashboard;
