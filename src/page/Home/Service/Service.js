import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Service = (props) => {
    const { name, photo, discreption } = props.service



    return (

        <Grid item xs={6} sm={6} md={4}  >
            <Card sx={{ minWidth: 275, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    height="194"
                    style={{ width: 'auto', height: "80px", margin: '0 auto' }}
                    image={photo}
                    alt="Paella dish"
                />
                <CardContent>

                    <Typography variant="h5" component="div" style={{ textAlign: "center" }}>
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {discreption}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>


    );
};

export default Service;