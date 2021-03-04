import React from 'react';
import ComponentCard from './ComponentCard.jsx';
import ComponentPage from './ComponentPage.jsx';


const MainBody = (props) => {


  const componentCards = [];
  for( let i=0; i<6; i++){
    componentCards.push(<ComponentCard number={i} />)
  }


  return (
    <div className="MainBody">
      {props.cardsOrPage === 'cards' ? componentCards : <ComponentPage />}
    </div>
  )
};
export default MainBody;
