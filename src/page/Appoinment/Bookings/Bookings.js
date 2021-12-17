import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = (props) => {
    const { id, name, time, space } = props.book
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    const setBookingSuccess = props.setBookingSuccess
    return (
        <>
            <Grid item xs={12} sm={6} md={4}  >

                <Paper elevation={3} sx={{ textAlign: 'center', py: 5 }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ color: "#1F94D6", fontWeight: 500 }}>
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACE AVAILAVIL
                    </Typography>
                    <Button variant="contained" onClick={handleOpen} sx={{ background: '#1F94D6', color: 'white' }} >BOOK APPOINTMNET</Button>
                </Paper>

            </Grid>
            <BookingModal
                book={props.book}
                date={props.date}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Bookings;