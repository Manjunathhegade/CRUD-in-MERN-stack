import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import EmployeeList from "./employeelist";
import CreateEmployee from "./createEmployee";
import Home from "./home";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#d6d4ce',
        textDecoration: 'none',
        fontSize: 20,
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <Router>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <ul>
                            <NavLink to="/" className={classes.menuButton} activeStyle={{
                                fontWeight: "bold",
                                color: "#fff"
                            }}>Home</NavLink>
                        </ul>
                        <ul>
                            <NavLink to="/employeelist" className={classes.menuButton} activeStyle={{
                                fontWeight: "bold",
                                color: "#fff"
                            }}>Employee List</NavLink>
                        </ul>
                        <ul>
                            <NavLink to="/createEmployee" className={classes.menuButton} activeStyle={{
                                fontWeight: "bold",
                                color: "#fff"
                            }}>Create Employee</NavLink>
                        </ul>
                    </Toolbar>
                </AppBar>

            </div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/employeelist">
                    <EmployeeList />
                </Route>
                <Route path="/createEmployee">
                    <CreateEmployee />
                </Route>
                 <Route path="/editEmployee/:id">
                    <CreateEmployee />
                </Route>
            </Switch>
        </Router>
    );
}


