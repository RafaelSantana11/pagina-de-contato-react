import React from 'react';
import { Grid, Typography } from '@material-ui/core/';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
                Dio - Contato
            </Typography>          
        </Grid>
    )
}

export default Header;
