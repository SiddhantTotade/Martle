import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Logout from '@mui/icons-material/Logout';
import { Component } from 'react';

export default class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            left: false
        }
    }

    handleSidebar() {
        this.setState({ left: true })
        console.log(this.state.left);
    }

    render() {

        // const [state, setState] = React.useState({
        //     left: false,
        // });

        // const toggleDrawer = (anchor, open) => (event) => {
        //     if (
        //         event &&
        //         event.type === 'keydown' &&
        //         (event.key === 'Tab' || event.key === 'Shift')
        //     ) {
        //         return;
        //     }

        //     setState({ ...state, [anchor]: open });
        // };

        const list = (anchor) => (
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
                role="presentation"
            >
                <List>
                    {['Your Account', 'Upload Product'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <AccountBoxIcon /> : <CloudUploadIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Logout'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Logout />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        );


        return (
            <div>
                {['left'].map((anchor) => (
                    <React.Fragment>
                        <Button onClick={this.handleSidebar}></Button>
                        <SwipeableDrawer
                        >
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>
        );
    }
}