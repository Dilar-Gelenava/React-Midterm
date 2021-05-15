import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../../components/nav-bar';
import Auth from '../auth';
import Addresses from '../addresses';
import Books from '../books';

function MainPage() {
  return (
    <div>
      <NavBar t="dark" />
      <BrowserRouter>
        <Switch>
          <Route path="/addresses">
            <Addresses />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/logout">
            <h1>you are logged out</h1>
            <a className={'bg-light'} href="/">
              go to main page
            </a>
          </Route>
          <Route path="/">
            <h1>Main Page</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default MainPage;
