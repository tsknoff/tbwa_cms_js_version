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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PreviewIcon from '@mui/icons-material/Preview';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import EditIcon from '@mui/icons-material/Edit';
import {Switch} from "@mui/material";
import DraggableList from "react-draggable-list";

const Work = () => {

    // const [workHeaders, set_workHeaders] = useState(["Client", "Title", "Actions"])
    const [workItems, set_workItems] = useState([
        {id: 1, preview: 'https://tbwa.ru/assets/work/cover-b.jpg',  client: 'Nissan', title: 'Запуск нового Nissan Pathfinder в России', link: ''},
        {id: 2, preview: 'https://tbwa.ru/assets/work/%D0%B2%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F_cover.jpg',  client: 'Delivery Club', title: 'Велосипедизация', link: ''},
        {id: 3, preview: 'https://tbwa.ru/assets/work/%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-flex2.jpg', client: 'Flexity', title: 'Пространство, чтобы процветать', link: ''},
        {id: 4, preview: 'https://tbwa.ru/assets/work/CORAL-TRAVEL-%D1%8F%D1%85%D1%82%D0%B0-2.jpg', client: 'Coral Travel', title: 'Яхта. Океан. Ты', link: ''},


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
                <Grid item xs={2}>
                    {item.client}
                </Grid>
                <Grid item xs={3}>
                    {item.title}
                </Grid>
                <Grid item xs={3}>
                    <IconButton>
                        <EditIcon color="inherit" sx={{ display: 'block' }} />
                    </IconButton>
                    <IconButton>
                        <PreviewIcon color="inherit" sx={{ display: 'block' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={1}>
                    <Switch {...label} />
                </Grid>
                <Grid item xs={1}>
                    <IconButton>
                        <DragIndicatorIcon
                            color="inherit"
                            sx={{ display: 'block' }}
                            onTouchStart={(e) => {
                                e.preventDefault();
                                document.body.style.overflow = "hidden";
                                onTouchStart(e);
                            }}
                            onMouseDown={(e) => {
                                console.log("mouseDown");
                                document.body.style.overflow = "hidden";
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
        <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
                <Toolbar >
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
            {/*<Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">*/}
            {/*    No work cases for yet*/}
            {/*</Typography>*/}
            <TableContainer >
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            <TableCell>Preview</TableCell>
                            <TableCell align="left">Client</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="center">Actions</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <Grid container
                  ref={containerRef}
                  xs={12}
                  direction="column"
            >
                {/*{workItems.map((item) => (*/}
                {/*    <WorkItem item={item} />*/}
                {/*))}*/}
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