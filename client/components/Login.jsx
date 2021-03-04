import React from 'react';

const Login = (props) => {
  const loginner = () => {
    const username = document.querySelector('#loginUsername').value;
    const password = document.querySelector('#loginPassword').value;
    //// route is "/login"
    console.log({ username });
    console.log({ password });
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then( (data) => data.json() )
      .then( (parsed) => (console.log(parsed.result), props.switchLoggedIn(parsed.result)) );
  };

  return (
    <div className="login">
      <input id="loginUsername" type="text" placeholder="username" />
      <input id="loginPassword" type="password" placeholder="password" />
      <button id="loginButton" onClick={loginner}>
        LOGIN
      </button>
      <button className="switchtogglebutton" onClick={()=>props.switchToggle(true)}>Switch to Login</button>
    </div>
  );
};
export default Login;
