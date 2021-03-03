import React, { useState, useEffect } from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Protected from './Protected.jsx';
import LoggedError from './LoggedError.jsx';

const AuthContainer = () => {
  const [loggedIn, switchLoggedIn] = useState(true);
  const [toggle, switchToggle] = useState(false);

  return (
    <div>
      {loggedIn ? <Protected /> : toggle ? <Signup switchLoggedIn={switchLoggedIn} switchToggle={switchToggle} /> : <Login switchLoggedIn={switchLoggedIn} switchToggle={switchToggle} /> }
      {loggedIn === false ? <LoggedError /> : null }
    </div>
  );
};

export default AuthContainer;
