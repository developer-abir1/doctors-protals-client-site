import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import doctor from "../../../img/doctor.png"
import { Button, Container, Typography } from '@mui/material';
import bg from "../../../img/appointment-bg.png"

const apponmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(48,54,74 ,0.8)',
    backgroundBlendMode: "darken, luminosity",
    marginTop: 175
}



const AppoinmentBanner = () => {
    return (

        <Container>
            <Box sx={{ flexGrow: 1 }} style={apponmentBg} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ height: "400px", marginTop: "-100px" }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>

                        <Box>
                            <Typography variant="h6" sx={{ color: "#1CE5E5", mb: 2 }}>
                                Appoinment
                            </Typography>
                            <Typography variant="h4" sx={{ color: "white" }}>
                                Make an Apponment  <br />
                                Today
                            </Typography>
                            <Typography variant="h6" sx={{ color: "white", my: 2, fontWeight: 300, fontSize: 14 }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.Vel eligendi, repudiandae odio libero cumque corporis a et necessitatibus adipisci accusamus amet officiis id beatae quos praesentium nulla aliquam.Excepturi, dicta?

                            </Typography>
                            <Button variant="contained" sx={{ background: '#14D4D4' }} >Larn more</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Container>

    );
};

export default AppoinmentBanner;