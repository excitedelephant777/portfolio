import * as React from 'react';
import { MenuItem, Link, Menu, Button, Typography, Box, AppBar } from '@mui/material';
import NavBar from './NavBar';

export default function Development() {
    return (
        <Box>
            <NavBar/>
            <Box sx={{height: "120px"}}></Box>
            <Box sx={{padding: "0px 20px"}}>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                <Typography sx={{textDecoration: "#f6ecf5 underline", textDecorationThickness: "10px", fontWeight: "300", fontSize: "75px"}} color="secondary">Web Development</Typography>   
                </Box>
                <Box sx={{padding: "30px 0px"}}>
                    <Typography variant="h3" color="secondary">Project Overview</Typography>
                    <Typography variant="body1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
                    <Box sx={{height: "30px"}}></Box>
                    <Typography variant="h5" color="secondary">Sketching</Typography>
                    <Typography variant="body1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
                    <Box sx={{display: "flex", justifyContent: "center", padding: "30px 0px"}}>
                        {/* <img src={sketch} style={{maxWidth: "50%"}}></img> */}
                    </Box>
                    <Box sx={{height: "30px"}}></Box>
                    <Typography variant="h5" color="secondary">Personas</Typography>
                    <Typography variant="body1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
                    <Box sx={{display: "flex", justifyContent: "space-around", padding: "30px 0px"}}>
                        {/* <img src={persona1} style={{maxWidth: "45%"}}></img>
                        <img src={persona2} style={{maxWidth: "45%"}}></img> */}
                    </Box>
                </Box>
                <Box sx={{padding: "30px 0px"}}>
                    <Typography variant="h3" color="secondary">Lessons Learned</Typography>
                    <Typography variant="body1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
                </Box>
            </Box>
        </Box>
    );
}