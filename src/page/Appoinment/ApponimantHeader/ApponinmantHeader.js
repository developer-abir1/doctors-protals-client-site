import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import chair from "../../../img/chair.png"
import Caleder from '../../../Share/Calender/Caleder';


const ApponinmantHeader = ({ date, setDate }) => {

    return (

        <Container style={{ height: '600px', display: 'flex', alignItems: 'center' }} >
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>
                        Appoinment
                    </Typography>
                    <Caleder date={date} setDate={setDate}></Caleder>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ApponinmantHeader;