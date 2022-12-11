import * as React from 'react';
import { List, ListItem, Typography, Box } from '@mui/material';
import NavBar from './NavBar';
import persona1 from './personas-photos/irene.png';
import persona2 from './personas-photos/nellie.png';
import sketch from './personas-photos/sketch.png';

export default function Personas() {
    return (
        <Box>
            <NavBar/>
            <Box sx={{height: "120px"}}></Box>
            <Box sx={{padding: "0px 20px"}}>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                <Typography sx={{textDecoration: "#E72BAC underline", textDecorationThickness: "10px", fontWeight: "300", fontSize: "75px"}} color="#F083CE">Sketching & Personas</Typography>   
                </Box>
                <Box sx={{padding: "30px 0px"}}>
                    <Typography variant="body1">This page examines the self-checkout interface at Target through an annotated sketch, user interviews and observations, and personas of archetypal users.</Typography>
                    <Box sx={{height: "30px"}}></Box>
                    <Typography variant="h5" color="#F083CE">Sketching</Typography>
                    <Typography variant="body1">The main component of the Target self-checkout interface is the touch screen, which contains each item scanned, the price of those items, and the total price. Users press the 'Pay' button when they have finished scanning their items and are ready to pay. From there, the interface presents four payment options, and the users selects an option and uses said option on the smaller screen to the right. This interface is meant to solve the issue of long lines at cashier lines, since the interface is much smaller than cashier lines and thus many can fit into a store.</Typography>
                    <Box sx={{display: "flex", justifyContent: "center", padding: "30px 0px"}}>
                        <img src={sketch} style={{maxWidth: "50%"}}></img>
                    </Box>
                    <Box sx={{height: "30px"}}></Box>
                    <Typography variant="h5" color="#F083CE">Interviews</Typography>
                    <Typography variant="body1">I interviewed three people as they used the self-checkout interface, and asked them the following questions:</Typography>
                    <List dense={true}>
                        <ListItem>- How comfortable are you with this interface?</ListItem>
                        <ListItem>- Is there anything you find confusing about the interface, or that you think could be improved about the interface?</ListItem>
                        <ListItem>- Would you ever pay in cash or add fresh produce with this interface?</ListItem>
                        <ListItem>- Why did you choose to use the self-checkout instead of the cashier line?</ListItem>
                        <ListItem>- How likely are you to use self-checkout the next time you visit Target?</ListItem>
                    </List>
                    <Typography variant="body1">Users reported being comfortable navigating the interface because:</Typography>
                    <List dense={true}>
                        <ListItem>- They have used it at this Target before</ListItem>
                        <ListItem>- They have used similar self-checkout interfaces at other stores</ListItem>
                        <ListItem>- They do not stray from the easiest, known use of the interface; in this case, paying with a credit card, buying few items, and only buying items with scannable barcodes</ListItem>
                    </List>
                    <Typography variant="body1">My Observations:</Typography>
                    <List dense={true}>
                        <ListItem>- Most users report being comfortable with the interface. They are able to use it without looking at it much</ListItem>
                        <ListItem>- Users report that, outside of these above use cases, they find the interface confusing</ListItem>
                        <ListItem>- They do not stray from the easiest, known use of the interface; in this case, paying with a credit card, buying few items, and only buying items with scannable barcodes. No users felt that they would know how to pay in cash or add fresh produce, and would rather go to a cashier line than experiment with the interface.</ListItem>
                        <ListItem>- Perception of time is a significant factor in likelihood of future use. Two users report they will continue to prefer self-checkout because they believe it to be faster. One user reports that she prefers the cashier line because she believes cashiers are more efficient because of their training.</ListItem>
                    </List> 
                    <Box sx={{height: "30px"}}></Box>
                    <Typography variant="h5" color="secondary">Personas</Typography>
                    <Typography variant="body1">I developed two personas to represent users for the checkout interviews based on my interviews:</Typography>
                    <Box sx={{display: "flex", padding: "30px 0px"}}>
                        <Box sx={{display: "flex", flexDirection: "column", padding: "0px 10px"}}>
                            <img src={persona1} style={{maxWidth: "100%", maxHeight: "350px", paddingBottom: "10px"}}></img>
                            <Typography variant="body2">Irene likes to be in control of her checkout experience. She feels confident using the interface and feels as though she can go faster than a cashier. She likes to decide the pace of her checkout, where items are bagged, et cetera. Two interviewee reported being comfortable with the interface and preferring it because of the greater independence and, as a result, perception of greater speed. Irene represents the users who prefer self-checkout to regular checkout.</Typography>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "column", padding: "0px 10px"}}>
                            <img src={persona2} style={{maxWidth: "100%", maxHeight: "350px", paddingBottom: "10px"}}></img>
                            <Typography variant="body2">Nellie is nervous about using the self-checkout interface. She is worried that she is going to make a mistake she will not know how to fix, and feels rushed by the line behind her. She chose self-checkout because it was immediately available, but would be less stressed in the cashier line. One interviewee reported that the interface was confusing and she would feel happier in a cashier line, and that the cashier may actually go faster because of their experience. Nervous Nellie represents the users who prefer regular checkout to self-checkout.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{paddingBottom: "30px"}}>
                    <Typography variant="h5" color="#F083CE">Lessons Learned</Typography>
                    <Typography variant="body1">This project was a great opportunity to analyze the user experience the way that a real interface designer might--to get a sense of the categories of people that will interact with your product, and how you can best adjust its features to serve their interests. This work is especially important for interfaces as popular as these, which must be highly learnable for as many people as possible. This project gave me a new appreciation for the work that goes into user interface design before anything is actually built.</Typography>
                </Box>
            </Box>
        </Box>
    );
}