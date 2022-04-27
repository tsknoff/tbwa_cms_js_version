import React from 'react';
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import {FormControl, FormHelperText, Input} from "@mui/material";

const ArticleContent = ({item, itemSelected, dragHandleProps}) => {
    const { onMouseDown, onTouchStart } = dragHandleProps;

    return(
        <Paper sx={{ maxWidth: 600, margin: 'auto', overflow: 'auto' }} >
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
                        <Input id="my-input" aria-describedby="my-helper-text" defaultValue={item.params.title}/>
                        <FormHelperText id="my-helper-text">Name of the case</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <Input id="my-input" aria-describedby="my-helper-text" defaultValue={item.params.client} />
                        <FormHelperText id="my-helper-text">Client name</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ArticleContent;