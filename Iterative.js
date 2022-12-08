import * as React from 'react';
import { Typography, Box } from '@mui/material';
import NavBar from './NavBar';
import apps from './iterative-photos/developer_apps.png';
import stats from './iterative-photos/developer_stats.png';
import homepage from './iterative-photos/recipient-view.png';

export default function Iterative() {
    return (
        <Box>
        <NavBar/>
        <Box sx={{height: "120px"}}></Box>
        <Box sx={{padding: "0px 20px"}}>
            <Box sx={{display: "flex", justifyContent: "center"}}>
            <Typography sx={{textDecoration: "#f6ecf5 underline", textDecorationThickness: "10px", fontWeight: "300", fontSize: "75px"}} color="secondary">Iterative Design</Typography>   
            </Box>
            <Box sx={{padding: "30px 0px"}}>
                <Typography variant="h3" color="secondary">Project Overview</Typography>
                <Typography variant="body1">As part of group of developers, I designed a web interface for 1Flow, a platform that allows developers to receive in-platform feedback on mobile and web apps. We designed lo-fi and hi-fi prototypes for the startups, iterating on the hi-fi designs after peer critiques.</Typography>
                <Box sx={{height: "30px"}}></Box>
                <Typography variant="h5" color="secondary">Lo-Fi Prototypes</Typography>
                <Box sx={{display: "flex", justifyContent: "center", padding: "30px 0px"}}>
                    <img src={homepage} style={{maxWidth: "50%"}}></img>
                    <img src={apps} style={{maxWidth: "100%", maxHeight: "350px", paddingBottom: "10px"}}></img>
                    <img src={stats} style={{maxWidth: "100%", maxHeight: "350px", paddingBottom: "10px"}}></img>
                </Box>
            </Box>
            <Box sx={{paddingBottom: "30px"}}>
                <Typography variant="h3" color="secondary">Lessons Learned</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
            </Box>
        </Box>
    </Box>
    );
}