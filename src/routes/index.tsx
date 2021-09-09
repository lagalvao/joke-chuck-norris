import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Favorites from '../pages/Favorites';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
