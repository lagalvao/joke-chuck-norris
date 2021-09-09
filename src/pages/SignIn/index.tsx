import { Grid, Container } from '@material-ui/core';

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo_black.svg';

const SignIn: React.FC = () => {
  return (
    <Grid
      justifyContent="space-around"
    >
      <Grid
        container
        direction="column"
      >
        <img src={illustrationImg} alt="" />

        <strong>
          Busque por piadas do Chuck Norris,
          mas cuidado com o que procura!
        </strong>
      </Grid>
      <Grid
        container
        direction="column"
      >
        <img src={logoImg} alt="Joke" />

        <form action="">
          <h2>Nos diga qual é o seu nome?</h2>
        </form>
      </Grid>
    </Grid>
  );
}

export default SignIn;
