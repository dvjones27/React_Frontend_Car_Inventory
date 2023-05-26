import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";
// import Background from '../assets/videos/world_rotating.mp4'

function Header() {
  return (
    <Box 
        // style={{ backgroundImage: `url(${Background})`}}
        className="flex w-full h-100 bg-blue-600 bg-opacity-95 bg-contain bg-no-repeat p-3 justify-items-center space-x-0 space-y-0 mx-auto border-2 border-gray-700 text-gray-300 "
    >
        <Container maxWidth="lg">
            <Grid className ="container columns-1  text-center content-evenly ">
                <Grid className="text-xs">
                    <Typography className="footer text-gray-300 text-xl " >
                        Find Your Cars Here
                    </Typography>
                    
                </Grid>
                
            </Grid>
        </Container>
        
    </Box>
  )
}

export default Header