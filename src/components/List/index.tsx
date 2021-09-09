import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { Button } from '@material-ui/core';

import { useStyles } from './styles';

const List: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <ul className={classes.headerList}>
        <li>ID</li>
        <li>Categoria</li>
        <li>Piada</li>
        <li>Favorito</li>
      </ul>
      <ul className={classes.itemList}>
        <li>1</li>
        <li>Nerd</li>
        <li>lorem ipsum</li>
        <li>
          <Button>
            <FavoriteIcon color="primary" />
          </Button>
        </li>
      </ul>
      <ul className={classes.itemList}>
        <li>1</li>
        <li>Nerd</li>
        <li>lorem ipsum</li>
        <li>
          <Button>
            <FavoriteBorderIcon />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default List;
