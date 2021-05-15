import { useState } from 'react';
import PropTypes from 'prop-types';

function NavBar(t) {
  const [theme, setTheme] = useState('dark');
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          Main Page
        </a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/addresses">
                Addresses
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/books">
                Books
              </a>
            </li>
            <li className="bg-light">
              <button
                className={'m-2 btn btn-secondary'}
                onClick={() => {
                  setTheme('light');
                }}>
                LIGHT
              </button>
            </li>
            <li className="bg-light">
              <button
                className={'m-2 btn btn-dark'}
                onClick={() => {
                  setTheme('dark');
                }}>
                DARK
              </button>
            </li>
            <li className="bg-light">
              <h3 className={'m-2'}>{theme}</h3>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/auth">
                LOG-IN
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/logout">
                LOG-OUT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  t: PropTypes.string,
};

export default NavBar;
