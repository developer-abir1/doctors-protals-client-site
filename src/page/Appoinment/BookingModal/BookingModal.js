import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import useAuth from '../../../hook/useAuth';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, book, date, setBookingSuccess }) => {
    const { name, time, space } = book
    const { user } = useAuth()
    const initalinfo = { patientName: user.displayName, email: user.email, patientNumbar: '' }
    const [bookingInfo, setBookingInfo] = useState(initalinfo)

    const handleFieldBlur = (e) => {
        const filed = e.target.name
        const values = e.target.value;
        const newValue = { ...bookingInfo }
        newValue[filed] = values;
        setBookingInfo(newValue)




    }

    const handleSubmit = e => {
        e.preventDefault();
        const appoinment = {
            ...bookingInfo,
            serviceName: name,
            time: time,
            date: date.toLocaleDateString(),

        }



        fetch('https://mighty-basin-45037.herokuapp.com/appoinment', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleBookingClose()
                }
            })





    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h4" component="h2" sx={{ mb: 2, color: "#0FE0E0", fontWeight: 400 }}>
                        {name}
                    </Typography>
                    <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ fontWeight: 300, fontSize: '14px', mb: 2 }}>
                        {space} Available spaces
                    </Typography>
                    <form onSubmit={handleSubmit}>

                        <TextField
                            disabled
                            sx={{ width: "90%", m: 1 }}
                            label="Appoinmant time"
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                            name='bookingTime'

                        />
                        <TextField

                            sx={{ width: "90%", m: 1 }}
                            defaultValue={user.displayName}
                            id="outlined-size-small"
                            size="small"
                            name="patientName"
                            onBlur={handleFieldBlur}
                        />
                        <TextField

                            sx={{ width: "90%", m: 1 }}

                            defaultValue={user.email}
                            id="outlined-size-small"
                            size="small"
                            name="email"
                            onBlur={handleFieldBlur}
                        />
                        <TextField

                            sx={{ width: "90%", m: 1 }}
                            defaultValue="Appoinmant Phone Numbar"
                            id="outlined-size-small"
                            size="small"
                            name='patientNumbar'
                            onBlur={handleFieldBlur}
                        />
                        <TextField
                            disabled
                            sx={{ width: "90%", m: 1 }}
                            label={date.toDateString()}
                            id="outlined-size-small"
                            size="small"
                            name="currentDate"

                        />

                        <Button type="submit" variant='contained' sx={{ background: "#0FE0E0", color: 'white' }} >  Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>

    );
};

export default BookingModal;