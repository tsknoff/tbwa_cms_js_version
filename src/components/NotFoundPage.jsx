import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NotFoundPage = () => {
    return (
        <Box style={{ margin: 'auto', overflow: 'auto'}} >
            <img style={{opacity: 0.1, maxWidth: "600px"}} src="https://c.tenor.com/RIjC2HtH1dUAAAAd/insomnia.gif" />
            <Typography variant="h4">This page is doesnt exist yet</Typography>
        </Box>
    );
};

export default NotFoundPage;