import * as React from 'react';
import { MenuItem, Menu, Button, Typography, Box, AppBar } from '@mui/material';
import { Link } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function NavBar() {
    const projects = ['Sketching & Personas', 'Iterative Design', 'Web Development', 'RGB LED Cube'];
    const urls = {'Sketching & Personas': '/personas', 'Iterative Design': '/iterative', 'Web Development': '/development', 'RGB LED Cube': '/rgb'}
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
// purple: sx={{color: "#9c27b0"}}
    <AppBar sx={{display: "flex", backgroundColor: "#f6ecf5", height: "80px"}}>
        <Box sx={{display: "flex", justifyContent: 'space-between', margin: "10px 30px", alignItems: "center", height: "100%"}}>
            <Typography sx={{fontWeight: 500, fontSize: "30px"}} color="secondary">excited elephant</Typography>
            <Box>
                <Button color="secondary" sx={{fontSize: "20px", marginRight: "25px"}} component={Link} to='/'>About</Button>
                <Button color="secondary" sx={{fontSize: "20px"}}
                    id="basic-button"
                    onClick={handleClick}
                >
                Projects
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >   
                    {projects.map((project) =>
                        <MenuItem key={project} onClick={handleClose} component={Link} to={urls[project]}>
                            <Typography textAlign="center">{project}</Typography>
                        </MenuItem>
                    )}
                </Menu>
            </Box>
        </Box>

    </AppBar>
    );
}