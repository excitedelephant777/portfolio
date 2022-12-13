import * as React from 'react';
import {Link,Typography, Box, List, ListItem} from '@mui/material';
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
                    <Typography variant="body1">The goal of the application is to help users explore popular tourist destinations in Europe and add them to an itinerary. This service is valuable because the user can see the population, first language, and miles from Providence, and use the itinerary feature to keep track of cities they are interested in visiting.</Typography>
                    <Box sx={{height: "30px"}}></Box>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <Typography variant="h5" color="#E72B48" sx={{paddingRight: "10px"}}>Application Link:</Typography>
                        <Link href="https://excitedelephant777.github.io/uiux-project-4/" target="_blank">https://excitedelephant777.github.io/uiux-project-4/</Link>
                    </Box>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <Typography variant="h5" color="#E72B48" sx={{paddingRight: "10px"}}>Repository Link:</Typography>
                        <Link href="https://github.com/excitedelephant777/uiux-project-4" target="_blank">https://github.com/excitedelephant777/uiux-project-4</Link>
                    </Box>
                </Box>
            <Box sx={{paddingBottom: "30px"}}>
               <Typography variant="h5" color="#E72B48">Code Description</Typography>
               <List dense={true}>
                <ListItem>The App component creates an instance of FilteredList, passing in an array of location objects, and includes the citation information at the bottom of the page</ListItem>
                <ListItem>The FilteredList component renders the filter/sorting features, uses the DisplayList component to display the list of cities, and uses the Itinerary component to display the Itinerary</ListItem>
                <ListItem>The DisplayList and Itinerary components also take in callback functions to the FilteredList component to handle adding to and removing from the itinerary.</ListItem>
                <ListItem>The user triggeres state changes by changing the values in the filter/sort menus or adding/removing from the itinerary</ListItem>
               </List>
               </Box>
                <Box sx={{paddingBottom: "30px"}}>
                    <Typography variant="h5" color="#E72B48">Lessons Learned</Typography>
                    <Typography variant="body1">Since the goal of this application is simple, I was able to focus on perfecting the filtering and sorting functionality. I feel confident that I have mastered the fundamentals of React--setting and updating the state based on user input, and passing props between components--and that I am ready to scale those skills to larger web development projects.</Typography>
                </Box>
            </Box>
        </Box>
    );
}