import { Grid } from '@material-ui/core';
import React from 'react';

import { loadPhotos } from '../../api/photoApi';

const PhotosContainer = () => {
    React.useEffect(() => {
        loadPhotos();
    }, [])

    return (
        <Grid container>
            <Grid item>
                123
            </Grid>
        </Grid>
    )
};

export default PhotosContainer;