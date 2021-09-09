import { TextField, TextFieldProps } from '@material-ui/core';
import React from 'react';

import { useStyles } from './styles';

type InputProps = TextFieldProps;

const Input: React.FC<InputProps> = ({ ...rest }) => {
  const classes = useStyles();

  return (
    <>
      <TextField className={classes.input} variant="outlined" {...rest} />
    </>
  );
};

export default Input;
