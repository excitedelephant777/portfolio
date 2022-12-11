import * as React from 'react';
import {Link,Typography, Box} from '@mui/material';
import NavBar from './NavBar';

export default function Development() {
    return (
        <Box>
            <NavBar/>
            <Box sx={{height: "120px"}}></Box>
            <Box sx={{padding: "0px 20px"}}>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                <Typography sx={{textDecoration: "#FB92A7 underline", textDecorationThickness: "10px", fontWeight: "300", fontSize: "75px"}} color="#E72B48">Web Development</Typography>   
                </Box>
                <Box sx={{padding: "30px 0px"}}>
                    <Typography variant="body1">For this project, I created a React app that presents popular tourist destinations across Europe. Users can sort and filter these destinations across multiple categories, and add a location to their itinerary, which serves as an aggregator.</Typography>
                    <Box sx={{height: "30px"}}></Box>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <Typography variant="h5" color="#E72B48" sx={{paddingRight: "10px"}}>Application Link:</Typography>
                        <Link href="https://excitedelephant777.github.io/uiux-project-4/" target="_blank">https://excitedelephant777.github.io/uiux-project-4/</Link>
                    </Box>
                </Box>
                <Box>
                    <Typography variant="h5" color="#E72B48">Lessons Learned</Typography>
                    <Typography variant="body1">Since the goal of this application is simple, I was able to focus on perfecting the filtering and sorting functionality. I feel confident that I have mastered the fundamentals of React--setting and updating the state based on user input, and passing props between components--and that I am ready to scale those skills to larger web development projects.</Typography>
                </Box>
            </Box>
        </Box>
    );
}