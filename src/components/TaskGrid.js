import React, { useState, useEffect } from 'react';
import Task from './Task';
import {
    makeStyles,
    Grid
} from '@material-ui/core/';
import { getTasks } from '../data/Tasks';

const useStyles = makeStyles((theme) => ({
    taskItem: {
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(2)
        },
        marginBottom: theme.spacing(2)
    },
}));

export default function TaskGrid() {

    const classes = useStyles();
    const [tasks, setTasks] = useState([]);

    useEffect(function () {
        setTasks(getTasks());   
        console.log(getTasks().length); 
    }, []);


    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            {
                tasks.map((task) => (
                    <Grid item xs={12} md={5} className= {classes.taskItem}>
                        <Task 
                            description={task.description} 
                            status={task.status}
                            dueDate={task.dueDate}
                            responsible={task.responsible.name}/>
                    </Grid>
                ))
            }
        </Grid>
    );
}