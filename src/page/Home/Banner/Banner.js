import React from 'react';
import chair from "../../../img/chair.png"
import bgChair from "../../../img/bg.png"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';


const bannerBg = {
    background: `url(${bgChair})`,
    marginTop: 40

}
const varicalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 500,
    justifyContent: 'center'
}


const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }} style={bannerBg}  >
            <Grid container spacing={2}>

                <Grid item xs={12} md={5} sx={{ ...varicalCenter, textAlign: "left" }}>
                    <Box>
                        <Typography variant="h3" component="h2" sx={{ fontWeight: 400, color: '101111', }}>
                            Your New Smile <br />
                            Start Here

                        </Typography>
                        <Typography variant="h6" component="h6" sx={{ my: 3, fontSize: '14px', fontWeight: 300, color: 'gray' }}>

                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur esse provident distinctio quaerat laborum, tempora tempore! Officia placeat praesentium ipsam!
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#2CE8E8", }}>Get Appoinment </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} style={varicalCenter}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>


            </Grid>
        </Container>
    );
};

export default Banner;