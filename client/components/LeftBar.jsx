import React from 'react';
import { Button } from '@chakra-ui/react';

const LeftBar = (props) => {






  return (
      <div id="Left">
        <p>THIS IS THE LEFT BAR</p>
        <p>WE CAN HAVE SOME COOL</p>
        <p>DATA TO SHOW HERE.</p>
        <Button 
        colorScheme="blue"
        onClick={() => props.cardsOrPage === 'cards' ? props.setCardsOrPage('page') : props.setCardsOrPage('cards')}>{props.cardsOrPage === 'cards' ? 'Switch to Contacts' : 'Switch to Cards'}</Button>
      </div>
  )
};
export default LeftBar;
