import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        top: 0,
        // position: "fixed"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: "left"
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div style={{ width: "100%" }} className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Job Board Pro</Typography>
                    <Link to={"/"} style={{color:"white", textDecoration:"none"}}>
                        <Button color="inherit">My Jobs</Button>
                    </Link>
                    <Link to={"/add-job"} style={{color:"white", textDecoration:"none"}}>
                        <Button color="inherit">Add Job</Button>
                    </Link>
                    <Link to={"/analytics"} style={{color:"white", textDecoration:"none"}}>
                        <Button color="inherit">Analytics</Button>
                    </Link>
                    <Link to={"/register"} style={{color:"white", textDecoration:"none"}}>
                        <Button color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}