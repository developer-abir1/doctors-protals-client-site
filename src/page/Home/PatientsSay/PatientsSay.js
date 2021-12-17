import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PatientsSay = (props) => {
    const { name, location, img, discreption } = props.patient
    return (
        <Grid sx={3} md={3} sx={{ m: 5, }}>
            <Paper elevation={3}>
                <Box sx={{ p: 2 }}>
                    <Typography variant="caption" >
                        {discreption}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box>
                        <img style={{ width: "80%" }} src={img} alt={name} />
                    </Box>
                    <Box>
                        <Typography variant="h5" component="h4" sx={{ fontWeight: 400, color: '#16E3E3' }}>
                            {name}
                        </Typography>
                        <Typography variant="caption" component="h4">
                            {location}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default PatientsSay;