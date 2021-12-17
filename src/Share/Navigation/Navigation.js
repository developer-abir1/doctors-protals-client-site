import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';


const Navigation = () => {

    const { user, logout } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, }}>
                        Doctor Protal
                    </Typography>
                    <Link to="/">
                        <Button color="inherit" >Home</Button>
                    </Link>
                    <Link to="/appoinment">
                        <Button color="inherit" >Appoinmnet</Button>
                    </Link>
                    {
                        user?.email ?
                            <Box>
                                <NavLink to="/dashboard">
                                    <Button color="inherit" >Dashboard</Button>
                                </NavLink>

                                <Button onClick={logout} color="inherit" >Logout</Button>
                            </Box>
                            :
                            <NavLink to="/login">
                                <Button color="inherit" >Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;