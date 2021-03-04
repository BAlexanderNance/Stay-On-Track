import React, { useState }  from 'react';
import MainBody from './MainBody.jsx'
import LeftBar from './LeftBar.jsx'
import { Image } from '@chakra-ui/react'

const Protected = (props) => {

const [cardsOrPage, setCardsOrPage] = useState('cards')




  return (
    <div className="grid-container">
    <div id="mainheader">
      <div id="headerlogodiv" ><img id='headerlogo' src='./stayontrackwhite.png' alt='STAYONTRACK' /></div>
      <div id="headerResumeNumberdiv" ><div id='headerResumeNumber' >20</div></div>
      <div id="headeralertsdiv" ><img id='headeralerts' src='./redalarmbell.png' /></div>
      <div id="headerbluemandiv" ><img id='headerblueman' src='./usernobeltmancopy.png' /></div>
    </div>
    <LeftBar setCardsOrPage={setCardsOrPage} cardsOrPage={cardsOrPage}/>
    <MainBody cardsOrPage={cardsOrPage} />
  </div>
  )
};
export default Protected;
