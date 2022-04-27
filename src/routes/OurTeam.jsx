import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DraggableList from "react-draggable-list";
import Paper from "@mui/material/Paper";
import {useRef, useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import {ListItem, Switch} from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import List from "@mui/material/List";

const OurTeam = () => {

    const [heroItems, set_heroItems] = useState([
        {id: 1, preview: 'https://tbwa.ru/assets/about/Abbasova-Natasha-01_600x900.jpg',  title: 'Natalia Abbasova', status: 1,  link: ''},
        {id: 2, preview: 'https://tbwa.ru/assets/about/%D0%98%D0%B3%D0%BE%D1%80%D1%8C.jpg',  title: 'Igor Charkin', status: 1, link: ''},
        {id: 3, preview: 'https://tbwa.ru/assets/about/Leyla-Rykova_600x900.jpg',  title: 'Leyla Rykova', status: 1, link: ''},
        {id: 4, preview: 'https://tbwa.ru/assets/about/Кирилл-1.jpg',  title: 'Kirill Blinov', status: 1, link: ''},
        {id: 5, preview: 'https://tbwa.ru/assets/about/%D0%9A%D0%BE%D0%BF%D1%86%D0%B8%D0%BA1.jpg',  title: 'Julia Sorokina', status: 1, link: ''},
        {id: 6, preview: 'https://tbwa.ru/assets/about/%D0%A1%D0%BE%D1%80%D0%BE%D0%BA%D0%B8%D0%BD%D0%B0-600%D1%85900_2022-01-10-093437_kqfc.jpg',  title: 'Julia Savina', status: 1, link: ''},

    ])

    const onHeroItemsChange = (newHeroItems) => {
        set_heroItems(newHeroItems);
    };

    const containerRef = useRef();

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const HeroItem = ({item, itemSelected, dragHandleProps}) => {

        const { onMouseDown, onTouchStart } = dragHandleProps;

        return(
            <Grid item container
                  key={item.id}
                  xs={12}
                  sx={{height: 200 }}
                  direction="row"
                  alignItems="center">
                <Grid item xs={2}>
                    <img alt="hero preview" width="120px" src={item.preview} />
                </Grid>
                <Grid item xs={3} align="center">
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
                    {item.status == 0 &&
                        <Switch {...label} />
                    }
                    {item.status == 1 &&
                        <Switch {...label} defaultChecked/>
                    }
                </Grid>
                <Grid item xs={3}>
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
                            onTouchEnd={(e) => {
                                document.body.style.overflow = "visible";
                            }}
                            onMouseUp={() => {
                                document.body.style.overflow = "visible";
                            }}
                        />
                    </IconButton>
                </Grid>
            </Grid>
        )
    }

    return (
        <Paper sx={{ maxWidth: 800, margin: 'auto', overflow: 'auto' }}>
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
                                Our team
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
                                placeholder="Search by name"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: { fontSize: 'default' },
                                }}
                                variant="standard"
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" sx={{ mr: 1 }}>
                                Add new person
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
                    <Grid item xs={2} align="center">
                        Preview
                    </Grid>
                    <Grid item xs={3} align="center">
                        Name
                    </Grid>
                    <Grid item xs={2} align="center">
                        Actions
                    </Grid>
                    <Grid item xs={2} align="right">
                        Status
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </Box>
            <Grid container
                  ref={containerRef}
                  xs={12}
                  direction="column"
            >
                {heroItems.length == 0 &&
                    <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                        Any persons in team is founded yet
                    </Typography>
                }
                <DraggableList
                    itemKey="id"
                    template={HeroItem}
                    list={heroItems}
                    onMoveEnd={(newList) => onHeroItemsChange(newList)}
                    container={() => containerRef.current}
                />
            </Grid>
        </Paper>
    );
};

export default OurTeam;