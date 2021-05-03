import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '33%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const HelloUser = () => {
    const classes = useStyles();

    return (
        <div className="about"
            style={{
                display: 'flex',
                justifyContent: 'Center',
                alignItems: 'Center',
                height: '100%',
                marginTop: '200px',
            }}
        >
        <div className={classes.root}>
            
            <Alert severity="info">
                    <h1>Hello mikaela.jintalan@gmail.com</h1>
            </Alert>
            
        </div>
    </div>
    );
}
export default HelloUser;