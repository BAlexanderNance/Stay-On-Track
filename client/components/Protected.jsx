import React from 'react';
import MainBody from './MainBody.jsx'
import LeftBar from './LeftBar.jsx'

const Protected = (props) => {






  return (
    <div className="grid-container">
    <div id="mainheader">
      <div id="headerlogodiv" ><img id='headerlogo' src='./stayontrackwhite.png'/></div>
      <div id="headerResumeNumberdiv" ><p id='headerResumeNumber'>{20}</p></div>
      <div id="headeralertsdiv" ><img id='headeralerts' src='./redalarmbell.png' /></div>
      <div id="headerbluemandiv" ><img id='headerblueman' src='./usernobeltmancopy.png' /></div>
    </div>
    <LeftBar />
    <MainBody / >
  </div>
  )
};
export default Protected;
