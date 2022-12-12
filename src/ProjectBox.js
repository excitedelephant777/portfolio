import { Button, Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";

export default function ProjectBox(props) {
    return (
        <Box sx={{display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "5px", padding: "12px", maxWidth: "20%"}}>
            <Typography variant="overline" sx={{fontWeight: "bold", fontSize: "15px"}}>{props.title}</Typography>
            <Typography variant="caption">{props.description}</Typography>
            <Button color="secondary" component={Link} to={props.url}>Explore</Button>
        </Box>
    );
}