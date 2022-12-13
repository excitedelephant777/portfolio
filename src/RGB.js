import * as React from 'react';
import {Typography, Box, Link, List, ListItem} from '@mui/material';
import NavBar from './NavBar';
import built from './rgb-photos/built.png'
import wiring from './rgb-photos/wiring.jpeg'
import jig from './rgb-photos/jig.jpeg'
import diagram1 from './rgb-photos/diagram1.png'
import diagram2 from './rgb-photos/diagram2.png'
import diagram3 from './rgb-photos/diagram3.png'
import diagram4 from './rgb-photos/diagram4.png'
import snowy from './rgb-photos/snowy.png'

export default function RGB() {
    return (
        <Box>
            <NavBar/>
            <Box sx={{height: "120px"}}></Box>
            <Box sx={{padding: "0px 20px"}}>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                <Typography sx={{textDecoration: "#F5E5A2 underline", textDecorationThickness: "10px", fontWeight: "300", fontSize: "75px"}} color="#ECCB45">RGB LED Cube</Typography>   
                </Box>
                <Box sx={{padding: "30px 0px"}}>
                    <Typography variant="body1">I built a 4x4x4 cube of charlieplexed RGB LEDs as a group final project for my Embedded Systems course. An RGB LED has four legs--one for ground, and one each to make red, green, and blue. With these three colors, it's possible to make any colors on the spectrum. 
                    Since we had 64 LEDs and only 16 pins, we needed to use charlieplexing to drive our LEDS. There are in-depth tutorials on charlieplexing that do it better justice than I can (I recommend <Link href="https://forum.digikey.com/t/what-is-charlieplexing-and-what-can-i-do-with-it/5963" target="_blank">this one</Link>), but for this purpose, it's enough to understand that charlieplexing allows you to use one pin to control multiple LEDs individually.
                    We used <Link href="https://aglick.com/charliecube.html" target="_blank">this</Link> tutorial.</Typography>
                    <Box sx={{height: "30px"}}></Box>
                    <Typography variant="h5" color="#ECCB45">Process:</Typography>
                    <Typography variant="body1">We started by first building each of the columns of the cube by construcing a wooden jig to hold each LED and soldering wire to each of the four legs. Here's a picture of the setup, with the first wire ready to be soldered:</Typography>
                    <Box sx={{display: "flex", justifyContent: "center", padding: "30px 0px"}}>
                        <img src={jig} style={{maxWidth: "50%"}}></img>
                    </Box>
                    <Box sx={{height: "30px"}}></Box>
                    <Typography variant="body1">Once the 16 columns of 4 LEDs were built, we soldered them to our prototyping board. Then it was time to connect each of the columns to each other to create a full cube. The legs of the LEDs were connected underneath the board using black wire. There were 48 pieces of black wire underneath in total (3 to connect 4 columns x 16 columns = 48). Each group of 3 wires formed one long connection between the 4 columns they spanned. For simplicity, we referred to each of these connections as wires, even though technically they were 3 wires. In total, there were 16 different "wires", pictured below (credit to Asher Glick, linked tutorial):</Typography>
                    <Box sx={{display: "flex", justifyContent: "space-around", padding: "30px 0px", flexWrap: "wrap"}}>
                        {/* citation: Asher Glick, Charlieplexing tutorial, see link */}
                        <img src={diagram1} style={{maxWidth: "40%"}}></img>
                        <img src={diagram2} style={{maxWidth: "40%"}}></img>
                        <img src={diagram3} style={{maxWidth: "40%"}}></img>
                        <img src={diagram4} style={{maxWidth: "40%"}}></img>
                    </Box>
                    <Typography variant="body1">This is a picture of the cube after the first two wire groups were done:</Typography>
                    <Box sx={{display: "flex", justifyContent: "space-around", padding: "30px 0px"}}>
                        <img src={wiring} style={{maxWidth: "50%"}}></img>
                    </Box>
                    <Typography variant="body1">Finally, we soldered longer, colored wires to the ends of each wire (so 16 in total), and connected those wires to the pins of our Arduino:</Typography>
                    <Box sx={{display: "flex", justifyContent: "space-around", padding: "30px 0px"}}>
                        <img src={built} style={{maxWidth: "45%"}}></img>
                    </Box>
                    <Typography variant="body1">Then it was time to write some code! We wrote C++ code to query a weather API for a location of a user's choice, and change the color of the cube based on the reported weather. The weather states we chose to represent are:</Typography>
                    <List dense={true}>
                        <ListItem>Sunny: The cube is solid green.</ListItem>
                        <ListItem>Snow: The cube is solid rainbow.</ListItem>
                        <ListItem>Thunderstorm: We were required to use a PWM signal at some point in our project, and this is the state where we did it. That meant we did not have the control over individual LEDs like with charlieplexing. We sent a PWM signal to turn the third layer of the cube green, which had the effect of turning the top layer red and second layer blue. This pattern is useful to understand why charlieplexing is important when one pin is used to drive multiple LEDs--without it, multiple LEDs in a column turn on, even when you are only explicitly driving power to one.</ListItem>
                        <ListItem>Rain: Certain LEDs on each layer of the cube turn blue, starting from the top and cascading down to the bottom, to simulate rain falling.</ListItem>
                    </List>
                    <Typography variant="body1">Here's what the cube looked like in action, displaying snow in Montana:</Typography>
                    <Box sx={{display: "flex", justifyContent: "space-around", padding: "30px 0px"}}>
                        <img src={snowy} style={{maxWidth: "45%"}}></img>
                    </Box>
                </Box>
                <Box sx={{padding: "30px 0px"}}>
                    <Typography variant="h5" color="#ECCB45">Lessons Learned</Typography>
                    <Typography variant="body1">This project had a steep learning curve. I had never soldered or charliplexed LEDs before. I learned that soldering is easy but soldering well is hard--it's all too easy to have a cold joint and have your LED fail to light. I also came to fully appreciate the importance of intermittent testing. By using a multimeter to test each LED and column as we went, we caught a lot of issues early that would have been much harder to fix later. Overall, I really enjoyed this project. It pushed me out of my comfort zone and it was satisfying to see something tangible come out of my many hours in the engineering workshop.</Typography>
                </Box>
            </Box>
        </Box>
    );
}