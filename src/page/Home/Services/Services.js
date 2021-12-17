import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import floride from '../../../img/fluoride.png'
import cavity from '../../../img/cavity.png'
import whitening from '../../../img/whitening.png'


const services = [
    {
        name: "Fluoride",
        discreption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
        photo: floride

    },
    {
        name: "Cavity",
        discreption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
        photo: cavity

    },
    {
        name: "Whitening",
        discreption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
        photo: whitening

    },
]


const Services = () => {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{ mb: 5 }}>
                <Typography variant="h6" component="div" sx={{ textAlign: 'center', m: 2, fontWeight: 400, color: 'success.main' }}>
                    OUR SERVICE
                </Typography>
                <Typography variant="h4" component="div" sx={{ textAlign: "center", m: 4, fontWeight: 500, }}>
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service service={service} key={services.name}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};


export default Services;