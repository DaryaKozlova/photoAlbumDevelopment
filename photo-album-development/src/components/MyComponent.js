import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Icon from '@material-ui/icons/AddCircleTwoTone';

const styles = makeStyles(() => {
    return {
        button: {
            backgroundColor: "pink"
        }
    }
});

const MyComponent = ({name}) => {
    const classes = styles();

    return (
        <Button startIcon={<Icon/>} endIcon={<AcUnitIcon/>} className={classes.button}>
            {name}
        </Button>
    )
}

export default MyComponent;