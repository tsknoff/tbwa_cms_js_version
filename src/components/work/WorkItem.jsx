import React from 'react';
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import {Switch} from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

const WorkItem = ({item, dragHandleProps}) => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const { onMouseDown, onTouchStart } = dragHandleProps;

    return(
        <Grid item container
              key={Date.now()}
              xs={12}
              sx={{height: 100 }}
              direction="row"
              alignItems="center">
            <Grid item xs={2} >
                <img alt="case preview" width="120px" src={item.preview} />
            </Grid>
            <Grid item xs={2} align="left">
                {item.client}
            </Grid>
            <Grid item xs={3} align="left">
                {item.title}
            </Grid>
            <Grid item xs={1} align="right">
                <IconButton>
                    <EditIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
                <IconButton>
                    <PreviewIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
            </Grid>
            <Grid item xs={1} align="right">
                {item.status === 0 &&
                    <Switch {...label} />
                }
                {item.status === 1 &&
                    <Switch {...label} defaultChecked/>
                }
            </Grid>
            <Grid item xs={2}>
                <IconButton>
                    <DragIndicatorIcon
                        color="inherit"
                        sx={{ display: 'block' }}
                        onTouchStart={(e) => {
                            e.preventDefault();
                            // document.body.style.overflow = "hidden";
                            onTouchStart(e);
                        }}
                        onMouseDown={(e) => {
                            console.log("mouseDown");
                            // document.body.style.overflow = "hidden";
                            onMouseDown(e);
                        }}
                    />
                </IconButton>
            </Grid>
        </Grid>
    )
};

export default WorkItem;