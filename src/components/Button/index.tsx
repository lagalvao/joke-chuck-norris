import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import { Button, ButtonProps } from '@material-ui/core';

import { useStyles } from './styles';

type ButtonFormProps = ButtonProps;

const ButtonForm: React.FC<ButtonFormProps> = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <>
      <Button
        size="large"
        className={classes.btn}
        endIcon={<SendIcon />}
        variant="contained"
        {...rest}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonForm;
