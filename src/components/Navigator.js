import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import {Link} from "react-router-dom";

const categories = [
    {
        id: 'Pages',
        children: [
            {
                id: 'Single',
                link: 'single',
                icon: <PermMediaOutlinedIcon />,
                // active: true,
            },
            { id: 'Work', icon: <DnsRoundedIcon />, link: 'work' },
            { id: 'Our team', icon: <PeopleIcon />, link: 'our-team'},
            { id: 'Assets', icon: <PublicIcon />, link: 'assets'},
        ],
    },
    {
        id: 'Information',
        children: [
            { id: 'Settings', icon: <SettingsIcon />, link: 'settings'},
            { id: 'About', icon: <TimerIcon />, link: 'about' },
            { id: 'Contact us', icon: <PhonelinkSetupIcon />, link: 'contact-us' },
        ],
    },
];

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};

export default function Navigator(props) {
    const { ...other } = props;

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    TBWA\CMS
                </ListItem>
                {/*<ListItem sx={{ ...item, ...itemCategory }}>*/}
                {/*    <ListItemIcon>*/}
                {/*        <HomeIcon />*/}
                {/*    </ListItemIcon>*/}
                {/*    <ListItemText>Project Overview</ListItemText>*/}
                {/*</ListItem>*/}
                {categories.map(({ id, children }) => (
                    // <Box key={id} sx={{ bgcolor: '#2f4f4f' }}>
                    <Box key={id} >
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, link, icon, active }) => (
                            <Link to={"/"+link}>
                                <ListItem disablePadding key={childId}>
                                        <ListItemButton selected={active} sx={item}>
                                            <ListItemIcon>{icon}</ListItemIcon>
                                            <ListItemText>{childId}</ListItemText>
                                        </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}

                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}