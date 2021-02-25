import React from 'react';
import {
    Container,
    TextField,
    Fab,
    makeStyles,
    Avatar,
    Typography,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    form: {
        padding: theme.spacing(1),
        margin: theme.spacing(1)
    },
    formControl: {
        marginTop: theme.spacing(3),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    }
}));


export default function UserProfile() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" className={classes.paper}>
            <Avatar className={classes.avatar}>
                <PersonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                User profile
            </Typography>
            <form className={classes.form} autoComplete="off" >
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    className={classes.formControl}
                />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    className={classes.formControl}
                />
                <TextField
                    id="password2"
                    label="Confirm password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    className={classes.formControl}
                />
            </form>
        </Container>
    );
}