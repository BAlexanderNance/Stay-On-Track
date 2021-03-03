import React from 'react';
import ComponentCard from './ComponentCard.jsx'


const MainBody = (props) => {


  const componentCards = [];
  for( let i=0; i<6; i++){
    componentCards.push(<ComponentCard number={i} />)
  }


  return (
    <div>
      {componentCards}
    </div>
  )
};
export default MainBody;
