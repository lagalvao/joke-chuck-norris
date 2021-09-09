import { TextField } from '@material-ui/core';
import React, { FormEvent, useCallback, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo_black.svg';
import ButtonForm from '../../components/Button';
import Input from '../../components/Input';

import { useStyles } from './styles';

const SignIn: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [name, setName] = useState('');

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (name === '') {
        toast.error('Campo obrigatório');
        return;
      }

      localStorage.setItem('@Joke:name', name);

      history.push('dashboard');
    },
    [name, history]
  );

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src={illustrationImg} alt="" />

        <strong className={classes.description}>
          Busque por piadas do Chuck Norris, mas cuidado com o que procura!
        </strong>
      </div>
      <div className={classes.forms}>
        <img src={logoImg} alt="Joke" />

        <h2 className={classes.formHeading}>Nos diga qual é o seu nome?</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <ButtonForm type="submit">Acessar</ButtonForm>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
