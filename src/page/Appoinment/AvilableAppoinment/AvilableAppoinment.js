import { Alert, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Bookings from '../Bookings/Bookings';

const AvilableAppoinment = ({ date }) => {

    const bookings = [
        {
            id: 2,
            name: "Teeth Orthodontics",
            time: '8:00 AM - 9:00AM',
            space: 21
        },
        {
            id: 22,
            name: "Cavity protection",
            time: '7:00 AM - 8:00AM',
            space: 10
        },
        {
            id: 1,
            name: "Teeth Cleaning",
            time: '5:00 PM - 6:30 PM',
            space: 21
        },
        {
            id: 12,
            name: "Cosmetic Dentistry",
            time: '10:05 AM - 11:30 AM',
            space: 21
        },
        {
            id: 8,
            name: "Teeth Orthodontics",
            time: '8:00 AM - 9:00AM',
            space: 21
        },
        {
            id: 8,
            name: "Teeth Orthodontics",
            time: '8:00 AM - 9:00AM',
            space: 21
        },
    ]


    const [bookinSuccess, setBookingSuccess] = useState(false)



    return (
        <Container>

            <Typography variant="h4" sx={{ textAlign: 'center', color: '#1F94D6', mb: 2 }}>Avilable Appoinmnet {date.toDateString()}</Typography>

            {bookinSuccess && <Alert security='success'> Appoinment  Booking successfully</Alert>}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    {
                        bookings.map(book => <Bookings
                            book={book}
                            key={book.id}
                            date={date}
                            setBookingSuccess={setBookingSuccess}
                        ></Bookings>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AvilableAppoinment;