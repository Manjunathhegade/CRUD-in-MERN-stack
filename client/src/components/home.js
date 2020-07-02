import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pos: {
        marginBottom: 12,
    },
    alignment: {
        textAlign: 'center',
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Welcome to CRUD Application</h1>
            <h4 style={{ textAlign: 'center' }}>Using MERN Stack</h4>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <h3><b>Employee Project</b></h3>
          This includes
        </Typography>
                    <Typography variant="h5" component="h2" className={classes.alignment}>
                        <h6>{bull}Create Employee</h6>
                        <h6>{bull}View Employee </h6>
                        <h6>{bull}Edit Employee</h6>
                        <h6>{bull}Delete Employee</h6>
                    </Typography>
                </CardContent>
            </Card>
            <SimpleList />
        </div>
    );
}


function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function SimpleList() {
    const classes = useStyles();

    return (
        <div>
        <div className={classes.list} style={{margin:30,marginLeft:100}}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="TOPICS" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItemLink href="#simple-list">
                    <ListItemText primary="API Validation" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                    <ListItemText primary="POST,GET and DELETE HTTP methods" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                    <ListItemText primary="API Routes" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                    <ListItemText primary="Error Handling" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                    <ListItemText primary="React-Router" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                    <ListItemText primary="With Parameter" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                    <ListItemText primary="material UI Integration" />
                </ListItemLink>
                <ListItemLink href="#simple-list" style={{width:600}}>
                    <ListItemText primary="Reusing component (Edit and Create Employee component are same)" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                    <ListItemText primary=" Arrow function" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                    <ListItemText primary=" Spread operater" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                    <ListItemText primary="Nav Links" />
                </ListItemLink>
            </List>
            
        </div>
        <div style={{float:'right'}}>
            <legend> By :</legend>
             <h4>Manjunath Hegade D R</h4>
             Email : manjunathhegadesmg@gmail.com
             <br/><br/>
            </div>
        </div>
    );
}
