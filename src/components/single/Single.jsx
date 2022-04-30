import React from 'react';
import {useState} from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import RefreshIcon from "@mui/icons-material/Refresh";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DraggableList from "react-draggable-list";
import SingleItem from "./SingleItem";

const Single = () => {
    const [singleItems, set_singleItems] = useState([
        {id: 1, title: 'Homepage', status: 1, link: ''},
        {id: 2, title: 'About', status: 1, link: ''},
        {id: 3, title: 'Disruption', status: 1, link: ''},
        {id: 4, title: 'Our team', status: 1, link: ''},
    ])
    const onSingleItemsChange = (newSingleItems) => {
        set_singleItems(newSingleItems);
    };

    return (
        <React.Fragment>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
                <Toolbar>
                    <Grid container spacing={2} >
                        <Grid item xs={12} align="center">
                            <Typography color="inherit" variant="h6" align="center">
                                Single pages
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar >
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon color="inherit" sx={{ display: 'block' }} />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search by title"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: { fontSize: 'default' },
                                }}
                                variant="standard"
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" sx={{ mr: 1 }}>
                                Add new page
                            </Button>
                            <Tooltip title="Reload">
                                <IconButton>
                                    <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box sx={{ borderBottom: 1, borderColor: '#eaeff1'}}>
                <Grid item container
                      xs={12}
                      sx={{height: 50 }}
                      direction="row"
                      alignItems="center">
                    <Grid item xs={5} align="center">
                        Title
                    </Grid>
                    <Grid item xs={2} align="center">
                        Actions
                    </Grid>
                    <Grid item xs={2} align="right">
                        Status
                    </Grid>
                </Grid>
            </Box>
            <Grid container
                  direction="column"
            >
                {singleItems.length === 0 &&
                    <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                        Not found any pages
                    </Typography>
                }
                <DraggableList
                    itemKey="id"
                    template={SingleItem}
                    list={singleItems}
                    onMoveEnd={(newList) => onSingleItemsChange(newList)}
                />
            </Grid>
        </React.Fragment>
    );
};

export default Single;