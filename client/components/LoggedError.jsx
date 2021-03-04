import React from 'react';

const LoggedError = (props) => {


  return (
    <div className="loggederror">
      Your attempted username and password were incorrect!
      <button className="switchtogglebutton" onClick={()=>(props.switchLoggedIn(null), props.switchToggle(false))}>Re-Login</button>
      <button className="switchtogglebutton" onClick={()=>(props.switchLoggedIn(null), props.switchToggle(true))}>Sign Up</button>
    </div>
  );
};
export default LoggedError;
