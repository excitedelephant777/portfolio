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
            <Typography sx={{textDecoration: "#3FBF3F underline", textDecorationThickness: "10px", fontWeight: "300", fontSize: "75px"}} color="#267226">Iterative Design</Typography>   
            </Box>
            <Box sx={{padding: "30px 0px"}}>
                <Typography variant="body1">As part of group of developers, I designed a web interface for 1Flow, a platform that allows developers to receive in-platform feedback on mobile and web apps. Developers of those applications use 1FLow to embed surveys throughout their applications, and then come to the 1Flow platform to analyze their data and use it to improve their user experience. We designed lo-fi and hi-fi prototypes for the startups, iterating on the hi-fi designs after peer critiques.</Typography>
                <Box sx={{height: "30px"}}></Box>
                <Typography variant="h5" sx={{color: "#267226"}}>Lo-Fi Prototypes</Typography>
                <Typography variant="body1">A lo-fi prototype captures the flow and core design elements of the application. Their simplicity ensures that the designer's focus is on getting those key features of the user experience right before moving on to smaller details like colors, text, et cetera.</Typography>
                <Box sx={{display: "flex", justifyContent: "center", padding: "30px 0px", flexWrap: "wrap"}}>
                    <img src={stats} style={{maxHeight: "600px", padding: "10px 20px"}}></img>
                    <img src={apps} style={{maxHeight: "600px", padding: "10px 20px"}}></img>
                    <img src={homepage} style={{maxWidth: "50%", padding: "10px 20px"}}></img>
                </Box>
                <Typography variant="h5" sx={{color: "#267226"}}>Hi-Fi Prototype</Typography>
                <Typography variant="body1">A hi-fi prototype builds on the lo-fi prototype to be a full mockup of the application, which is useful for accurate user testing and so that developers are clear on what they are expected to build.
                This prototype is the final product after a round of peer critique and a round of user testing, where strangers performed actions typical of a user--logging in, viewing statistics, etc.--and reported their experience. Most critiques were relatively minor and easy to fix (mostly involving changes in wording). </Typography>
                <Box sx={{display: "flex", justifyContent: "center", padding: "30px"}}>
                    <iframe title="figma embed" sx={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMMR5T4P3jWsVmJYMEHVy8c%2F1Flow%3Fnode-id%3D10%253A2%26starting-point-node-id%3D10%253A2%26scaling%3Dscale-down-width" allowFullScreen></iframe>
                </Box>
            </Box>
            <Box sx={{paddingBottom: "30px"}}>
                <Typography variant="h5" sx={{color: "#267226"}}>Lessons Learned</Typography>
                <Typography variant="body1">This project was a great exercise to develop my prototyping skills and learn about its role in the development process. 
                It is all too easy to get distracted by less consequential features of the application and lose sight of the core functionality and user experience, and bifurcating the prototyping process is a simple yet effective method of preventing that.
                This assignment also made me appreciate the importance of user testing--even seemingly minor defects, like a button saying "Edit" rather than "Edit Questionnaire", can make users very confused and frustrated using your application, and it is important to catch those issues early.</Typography>
            </Box>
        </Box>
    </Box>
    );
}