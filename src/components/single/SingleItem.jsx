import React from 'react';
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import {Switch} from "@mui/material";

const SingleItem = ({item}) => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return(
        <Grid item container
              key={item.id}
              xs={12}
              sx={{height: 100 }}
              direction="row"
              alignItems="center">
            <Grid item xs={5} align="center">
                {item.title}
            </Grid>
            <Grid item xs={2} align="right">
                <IconButton>
                    <EditIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
                <IconButton>
                    <PreviewIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
            </Grid>
            <Grid item xs={2} align="right">
                {item.status === 0 &&
                    <Switch {...label} />
                }
                {item.status === 1 &&
                    <Switch {...label} defaultChecked/>
                }
            </Grid>
        </Grid>
    )
};

export default SingleItem;