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
                <Typography sx={{textDecoration: "#f6ecf5 underline", textDecorationThickness: "10px", fontWeight: "300", fontSize: "75px"}} color="secondary">Sketching & Personas</Typography>   
                </Box>
                <Box sx={{padding: "30px 0px"}}>
                    <Typography variant="h3" color="secondary">Project Overview</Typography>
                    <Typography variant="body1">This page examines the self-checkout interface at Target through an annotated sketch, user interviews and observations, and personas of archetypal users.</Typography>
                    <Box sx={{height: "30px"}}></Box>
                    <Typography variant="h5" color="secondary">Sketching</Typography>
                    <Typography variant="body1">The main component of the Target self-checkout interface is the touch screen, which contains each item scanned, the price of those items, and the total price. Users press the 'Pay' button when they have finished scanning their items and are ready to pay. From there, the interface presents four payment options, and the users selects an option and uses said option on the smaller screen to the right. This interface is meant to solve the issue of long lines at cashier lines, since the interface is much smaller than cashier lines and thus many can fit into a store.</Typography>
                    <Box sx={{display: "flex", justifyContent: "center", padding: "30px 0px"}}>
                        <img src={sketch} style={{maxWidth: "50%"}}></img>
                    </Box>
                    <Box sx={{height: "30px"}}></Box>
                    <Typography variant="h5" color="secondary">Interviews</Typography>
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
                    <Typography variant="body1">Most users report being comfortable with the interface. They are able to use it without looking at it much, maintaining eye contact with the interviewer throughout. One user prefers the cashier line and is not comfortable with the interface.
Users report that, outside of these above use cases, they find the interface confusing. No users felt that they would know how to pay in cash or add fresh produce, and would rather go to a cashier line than experiment with the interface.
Perception of time is a significant factor in likelihood of future use. Two users report they will continue to prefer self-checkout because they believe it to be faster. One user reports that she prefers the cashier line because she believes cashiers are more efficient because of their training.</Typography>
                    <Box sx={{height: "30px"}}></Box>
                    <Typography variant="h5" color="secondary">Personas</Typography>
                    <Typography variant="body1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
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
                    <Typography variant="h3" color="secondary">Lessons Learned</Typography>
                    <Typography variant="body1"> The interface had very few instructions, which made it easy to get started but harder if you made a mistake that you did not know how to fix. Overall, I think having few instructions is better, since most self-checkout users are frequent users, making ease of use more important than learnability. I was surprised to discover that users felt as strongly as they did about whether self-checkout or regular-checkout was better. These feelings were strongly tied to perceptions of which option was faster. All users reported that they felt more responsible for their pace during self-checkout, and the users that felt more stressed by that rush factor were more likely to prefer regular checkout. I was surprised to learn the extent to which the rush factor affected user patters; users felt so rushed that none felt comfortable experimenting with new functionality (e.g., paying in cash).</Typography>
                </Box>
            </Box>
        </Box>
    );
}