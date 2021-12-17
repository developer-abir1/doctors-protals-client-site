import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCoffee, faMap, faMapMarker, faMapSigns, faPhone, faPhoneAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'


const ServiceInfo = () => {

    const serviceInfo = [

        {
            name: 'Opening Hours',
            discription: 'Lorem ipsum, dolor sit ame ',
            icon: faClock,
            color: '#2EDCDC'
        },
        {
            name: 'Visit Our location',
            discription: 'Broklyn, Ny 10036, United States',
            icon: faMapMarker,
            color: '#1C1E1E'
        },
        {
            name: 'Contacat use Now',
            discription: '0175210378698',
            icon: faPhoneAlt,
            color: '#2EDCDC'
        },

    ]


    return (

        <Container sx={{ display: 'flex', justifyContent: "center" }}>
            <Grid container spacing={2} sx={{ margin: "-80px ", mb: 5, textAlign: 'center', display: 'flex', justifyContent: 'center' }} >
                {
                    serviceInfo.map(info =>
                        <Grid item xs={6} sm={6} md={3} sx={{
                            background: `${info.color}`, m: 2, color: 'white', display: 'flex', alignItems: 'center', borderRadius: '5px', py: 2,
                        }} >
                            <Box sx={{}
                            } >
                                <FontAwesomeIcon style={{ fontSize: "30px" }} icon={info.icon} />
                            </Box>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 500 }} >
                                    {info.name}
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 300, fontSize: '14px' }} >
                                    {info.discription}
                                </Typography>
                            </Box>
                        </Grid>


                    )
                }


            </Grid >
        </Container >

    );
};

export default ServiceInfo;