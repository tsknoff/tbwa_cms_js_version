import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import Box from "@mui/material/Box";
import DraggableList from "react-draggable-list";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import {
    CardActions,
    CardContent,
    FormControl, FormControlLabel, FormGroup,
    FormHelperText,
    Input,
    InputLabel,
    Switch,
    TextareaAutosize
} from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import {useRef, useState} from "react";
import Divider from "@mui/material/Divider";
import ArticleContent from "../components/blocks/ArticleContent";
import {Link} from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Editor = () => {
    const [editBlocks, set_editBlocks] = useState([
        {
            pageID: 1,
            type: "case",
            html_id: "article-content",
            blockName: "Article content",
            params: {
                body_title: 'A new dimension of power',
                body_text: 'In 2022, Nissan launched the all-new Nissan Pathfinder on the Russian market. Along with this model, a new body, new design and Nissan\'s most advanced technologies have come to the market.\n' +
                    '\n' +
                    'To launch an advertising campaign in Russia, TBWA\\Moscow developed a completely local strategy and idea align with model\'s history and its perception by the Russian audience.\n' +
                    '\n' +
                    'The created 360 ​​communication was based on the new Nissan Pathfinder versatility — the power of the legendary V6 engine, brutal design and intelligent technologies for safety and driving comfort.\n' +
                    '\n' +
                    'TBWA\\Moscow developed a wide range of materials to support the new model launch — from a TV commercial and visual design to social media materials and dealerships POSM.',
                awards: [ "2019 CLIO Sports — Silver \\ Social Media",
                          "2019 CLIO Sports — Bronze \\ Integrated Campaign",
                          "2019 Silver Mercury — Gold \\ Best sport-marketing/cyber sport marketing campaign",
                          "2019 Silver Mercury — Short list \\ Best integrated marketing campaign"] ,
                share: true,
                media: [
                    {type: "video", src: "https://player.vimeo.com/3d3c32e9-8f44-4dcf-a5c5-8a6b8f083f6a",  order: "1"},
                    {type: "img", src: "https://tsknoff.ru/tbwasite/assets/work/Clio_HD.jpg",  order: "2"},
                    {type: "img", src: "https://tsknoff.ru/tbwasite/assets/work/Datsun_Workout_leaflet_mockup_r12-1329.jpg",  order: "3"},
                    {type: "img", src: "https://tsknoff.ru/tbwasite/assets/work/pasted-image-1780.jpg",  order: "4"},
                ],
            },
        },
        {
            id: 2,
            name: 'Awards',
            html_id: 'article-content',
            params: {
                title: '',
                client: '',
                body_title: '',
                body_text: '',
            }},
    ])
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const BlockItem = ({item, itemSelected, dragHandleProps}) => {

        const { onMouseDown, onTouchStart } = dragHandleProps;

        return(
            <Paper sx={{ maxWidth: 800, margin: 'auto', overflow: 'auto' }} >
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
                >
                    <Toolbar>
                        <Grid container xs={12} direction="row" alignItems="center" >
                            <Grid item xs={11} align="left">
                                <Typography color="inherit" variant="h7" align="center">
                                    {item.blockName}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
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
                    </Toolbar>
                </AppBar>
                <Grid container padding={5} direction="column" xs={12} spacing={3}>
                    <Grid item>
                        <FormControl fullWidth>
                            <TextField
                                id="filled-textarea"
                                label="Body title"
                                multiline
                                defaultValue={item.params.body_title}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth>
                            <TextField
                                id="filled-textarea"
                                label="Body text"
                                multiline
                                defaultValue={item.params.body_text}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth>
                            <TextField
                                id="filled-textarea"
                                label="Awards"
                                multiline
                                defaultValue={item.params.awards}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth>
                            <FormControlLabel
                                control={
                                    <Switch checked={item.params.share} name="share"/>
                                }
                                label="Social share button"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
    const onBlockItemsChange = (newEditBlocks) => {
        set_editBlocks(newEditBlocks);
    };
    const containerRef = useRef();
    return (
        // <Paper sx={12} >
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
                                Editor
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar>
                    <Grid container spacing={2}>
                        <Grid item xs={12} align="right">
                            <Button variant="contained" sx={{ mr: 1 }}>
                                Save
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
            <Grid container
                  ref={containerRef}
                  paddingTop="30px"
                  paddingBottom="30px"
                  direction="column"
            >
                {editBlocks.length == 0 &&
                    <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                        No any blocks yet
                    </Typography>
                }
                <DraggableList
                    itemKey="id"
                    template={BlockItem}
                    list={editBlocks}
                    onMoveEnd={(newList) => onBlockItemsChange(newList)}
                    container={() => containerRef.current}
                />
            </Grid>
        {/*// </Paper>*/}
    </React.Fragment>
    );
};

export default Editor;