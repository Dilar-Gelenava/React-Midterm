import { useState } from 'react';
import { ThemeConsumer } from '../../contexts/themeContext';
// import PropTypes from 'prop-types';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    alert('you are logged in as ' + email);
    console.log(email, password);
  };

  return (
    <div className="mb-3 m-2 w-25">
      <ThemeConsumer>
        {(theme) => {
          return (
            <form
              action=""
              className={'rounded bg-dark p-4'}
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}>
              <div className="form-group">
                <label className="text-primary">
                  Email:
                  <input
                    required
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={({ target }) => {
                      setEmail(target.value);
                    }}
                  />
                </label>
              </div>
              <div className="form-group">
                <label className="text-primary">
                  Password:
                  <input
                    required
                    type="password"
                    name="email"
                    className="form-control"
                    onChange={({ target }) => {
                      setPassword(target.value);
                    }}
                  />
                </label>
              </div>
              <br />
              <button type="submit" className={'btn btn-primary'}>
                SUBMIT
              </button>
            </form>
          );
        }}
      </ThemeConsumer>
    </div>
  );
}

export default Auth;
