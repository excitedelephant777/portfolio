import { Wave } from 'react-animated-text';
import { Typography, Box } from '@mui/material';
import ProjectBox from './ProjectBox';
import NavBar from './NavBar';

export default function About() {
    return (
        <Box>
            <NavBar bgColor="#f6ecf5" textColor="secondary"/>
            <Box sx={{height: "40px"}}></Box>
            <Box sx={{padding: "30px"}}>
                <Box sx={{height: "80px"}}></Box>
                <Box sx={{fontFamily: 'Roboto'}}>
                    <Box sx={{height: "80px"}}></Box>
                    <Box sx={{color: "#9c27b0", fontSize: "100px"}}>
                        <Wave text="Hello!" speed={5} iterations={1}/>
                    </Box>
                    <Box sx={{padding: "30px 0px 70px"}}>
                        <Typography variant="h5">I'm a junior at Brown University studying computer science. This portfolio highlights some of my main projects, with a focus on UI/UX design.</Typography>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <ProjectBox title="Sketching & Personas" description="Personas for self-checkout interface." url="/personas"/>
                        <ProjectBox title="Iterative Design" description="Lo-Fi and Hi-Fi prototypes for real-life surveying startup." url="/iterative"/>
                        <ProjectBox title="Web Development" description="React application featuring sorting, filtering, and aggregation." url="/development"/>
                        <ProjectBox title="RGB LED Cube" description="A 4x4x4 cube of RGB LEDs that responds to the weather." url="/rgb"/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}