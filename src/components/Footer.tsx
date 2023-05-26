import React, { FC, ReactElement } from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";



export const Footer: FC = (): ReactElement => {
    return (
      <Box 
        className="flex w-full h-auto bg-blue-600 bg-opacity-95 p-1 border-3 border-gray-700 text-gray-300 text-xl"
        
      >
        <Container className="flex border-3 border-gray-700 max-w-lg" >
          <Grid className ="container columns-1  text-center content-evenly ">
            <Grid className="text-xl">
            <Typography className="footer" >
              Car Inventory
            </Typography>
          </Grid>
          <Grid className="text-xs">
            <Typography className="text-gray-300 subtitle-1 ">
              {`DJones `}<br/>
              <i className="fa-regular fa-copyright"></i>{`${new Date().getFullYear()}`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      
    </Box>
  );
};

export default Footer