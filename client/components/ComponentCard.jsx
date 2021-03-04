import React from 'react';
import { Box, Grid } from "@chakra-ui/react";


const ComponentCard = (props) => {




  return (
    <Grid className='cards' >
      <Box 
      color="blue"
      p='10px' 
      m='10px'
      flexDirection='column' 
      bg='#EDF2F7' 
      > THIS Component {props.number} </Box>
    </Grid>
  )
};
export default ComponentCard;
