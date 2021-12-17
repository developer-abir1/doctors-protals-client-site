import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatmanet from "../../../img/treatment.png"
import { Button, Container, Typography } from '@mui/material';

const DantalCare = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "95%" }} src={treatmanet} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: 'center' }}>
                    <Box >
                        <Box>
                            <Typography variant="h3" sx={{ fontWeight: 500, mb: 10 }}>
                                Exceptioal Dental <br /> Care , On Your Terms
                            </Typography>
                            <Typography variant="caption" sx={{ fontWeight: 300, fontSize: '20px', }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sequi quasi asperiores, reiciendis incidunt nobis minus illo, fugiat aliquid iste consequatur, saepe dicta qui quidem inventore sint veniam earum dolorum!
                            </Typography>
                        </Box>
                        <Button variant="contained" sx={{ mt: 15, background: "#13DFDF" }} >Laren More</Button>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    );
};

export default DantalCare;