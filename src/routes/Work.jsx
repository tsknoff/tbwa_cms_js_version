import React, {useRef, useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import Paper from "@mui/material/Paper";
import PreviewIcon from '@mui/icons-material/Preview';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import EditIcon from '@mui/icons-material/Edit';
import {ListItem, Switch} from "@mui/material";
import DraggableList from "react-draggable-list";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

const Work = () => {

    // const [workHeaders, set_workHeaders] = useState(["Client", "Title", "Actions"])
    const [workItems, set_workItems] = useState([
        {id: 1, preview: 'https://tbwa.ru/assets/work/cover-b.jpg',  client: 'Nissan', title: 'Запуск нового Nissan Pathfinder в России', status: 1,  link: ''},
        {id: 2, preview: 'https://tbwa.ru/assets/work/%D0%B2%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F_cover.jpg',  client: 'Delivery Club', title: 'Велосипедизация', status: 1, link: ''},
        {id: 3, preview: 'https://tbwa.ru/assets/work/%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-flex2.jpg', client: 'Flexity', title: 'Пространство, чтобы процветать', status: 0, link: ''},
        {id: 4, preview: 'https://tbwa.ru/assets/work/CORAL-TRAVEL-%D1%8F%D1%85%D1%82%D0%B0-2.jpg', client: 'Coral Travel', title: 'Яхта. Океан. Ты', status: 1, link: ''},
    ])

     const onWorkItemsChange = (newWorkItems) => {
         set_workItems(newWorkItems);
     };

    const containerRef = useRef();

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const WorkItem = ({item, itemSelected, dragHandleProps}) => {

        const { onMouseDown, onTouchStart } = dragHandleProps;

        return(
            <Grid item container
                  key={item.id}
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
                    {item.status == 0 &&
                        <Switch {...label} />
                    }
                    {item.status == 1 &&
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
        <Paper sx={{ maxWidth: 1200, margin: 'auto', overflow: 'auto' }}>
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
                                Work cases
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon color="inherit" sx={{ display: 'block' }} />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search by client or title"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: { fontSize: 'default' },
                                }}
                                variant="standard"
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" sx={{ mr: 1 }}>
                                Add new case
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
                    <Grid item xs={2} align="left">
                        Client
                    </Grid>
                    <Grid item xs={3} align="left">
                        Title
                    </Grid>
                    <Grid item xs={1} align="center">
                        Actions
                    </Grid>
                    <Grid item xs={1} align="right">
                        Status
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </Box>
            <Grid container
                  ref={containerRef}
                  xs={12}
                  direction="column"
            >
                {workItems.length == 0 &&
                    <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                        No work cases yet
                    </Typography>
                }
                <DraggableList
                    itemKey="id"
                    template={WorkItem}
                    list={workItems}
                    onMoveEnd={(newList) => onWorkItemsChange(newList)}
                    container={() => containerRef.current}
                />
            </Grid>
        </Paper>
    );
};

export default Work;