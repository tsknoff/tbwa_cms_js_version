import React from 'react';
import {ImageList, ImageListItem} from "@mui/material";
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

const Assets = () => {
    const itemData = [
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/coral1.jpg',
            title: 'Breakfast',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/coral2.jpg',
            title: 'Burger',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/coral3.jpg',
            title: 'Camera',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/coral5.jpg',
            title: 'Coffee',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_1.png',
            title: 'Hats',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_2.png',
            title: 'Honey',
            author: '@arwinneil',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_3.png',
            title: 'Basketball',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_5.png',
            title: 'Fern',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_1.png',
            title: 'Hats',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_2.png',
            title: 'Honey',
            author: '@arwinneil',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_3.png',
            title: 'Basketball',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_5.png',
            title: 'Fern',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_1.png',
            title: 'Hats',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_2.png',
            title: 'Honey',
            author: '@arwinneil',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_3.png',
            title: 'Basketball',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_5.png',
            title: 'Fern',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_1.png',
            title: 'Hats',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_2.png',
            title: 'Honey',
            author: '@arwinneil',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_3.png',
            title: 'Basketball',
        },
        {
            img: 'https://tsknoff.ru/tbwasite/assets/work/HP_5.png',
            title: 'Fern',
        },
    ];
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
                                Assets
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
                                placeholder="Search assets"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: { fontSize: 'default' },
                                }}
                                variant="standard"
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" sx={{ mr: 1 }}>
                                Upload asset
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
            <ImageList sx={{ maxWidth: '800px', margin: 'auto', height: 'auto' }} cols={3} gap={12}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Paper>
    );
};

export default Assets;