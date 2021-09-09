import React, { useCallback } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { Button } from '@material-ui/core';

import toast, { Toaster } from 'react-hot-toast';
import { useStyles } from './styles';

export interface Jokes {
  id: number;
  joke: string;
}

interface ListProps {
  jokes: Jokes[];
}

const List: React.FC<ListProps> = ({ jokes }) => {
  const classes = useStyles();

  const handleAddFavorite = useCallback((id: number) => {
    const favorites = [];

    favorites.push(id);

    localStorage.setItem('@Joke:id', JSON.stringify(id));

    toast.success('Piada adicionada aos favoritos');
  }, []);

  return (
    <div className={classes.list}>
      <ul className={classes.headerList}>
        <li>ID</li>
        <li>Piada</li>
        <li>Favorito</li>
      </ul>
      {jokes.map((joke) => (
        <ul key={joke.id} className={classes.itemList}>
          <li>{joke.id}</li>
          <li className={classes.limitador}>{joke.joke}</li>
          <li>
            <Button onClick={() => handleAddFavorite(joke.id)}>
              <FavoriteIcon color="primary" />
              <Toaster />
            </Button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default List;
