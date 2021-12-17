import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import img1 from "../../../img/people-1.png"
import img2 from "../../../img/people-2.png"
import img3 from "../../../img/people-3.png"
import PatientsSay from '../PatientsSay/PatientsSay';


const Tastmonial = () => {
    const patients = [
        {
            name: 'Wenson Harry',
            location: "Calfonia",
            img: img1,
            discreption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eum, ad atque at, vero aliquam optio error cupiditate reprehenderit dignissimos eius itaque inventore, enim rerum ipsum? Consectetur laborum corporis perferendis?"

        },
        {
            name: 'Markimo  Harry',
            location: "Calfonia",
            img: img2,
            discreption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eum, ad atque at, vero aliquam optio error cupiditate reprehenderit dignissimos eius itaque inventore, enim rerum ipsum? Consectetur laborum corporis perferendis?"

        },
        {
            name: 'Darqun Harry',
            location: "Calfonia",
            img: img3,
            discreption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eum, ad atque at, vero aliquam optio error cupiditate reprehenderit dignissimos eius itaque inventore, enim rerum ipsum? Consectetur laborum corporis perferendis?"

        },
    ]
    return (

        <Container sx={{ flexGrow: 1 }} sx={{ height: "500px", mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" component="h5" sx={{ color: '#16E3E3' }}>
                        Tastmonial
                    </Typography>
                    <Typography variant="h3" component="h5" sx={{}}>
                        What's Our patients    <br /> Say
                    </Typography>
                </Grid>

            </Grid>
            <Grid container spacing={2}>
                {
                    patients.map(patient => <PatientsSay key={patient.name} patient={patient}></PatientsSay>)
                }
            </Grid>
        </Container>

    );
};

export default Tastmonial;