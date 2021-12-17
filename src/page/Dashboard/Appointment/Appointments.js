import React, { useEffect, useState } from 'react';
import useAuth from '../../../hook/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Button, CircularProgress, Typography } from '@mui/material';


const Appointments = ({ date }) => {
    const { user, token } = useAuth()
    const [appointmet, setAppointment] = useState([])


    useEffect(() => {

        const url = `https://mighty-basin-45037.herokuapp.com/appoinment?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {

                setAppointment(data)
            })

    }, [date, user.email, token])


    return (
        <div>
            <Typography variant='h4' sx={{ textAlign: "center", mb: 2, fontWeight: 400 }}> Appointment {appointmet.length}</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>

                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service Name</TableCell>
                            <TableCell align="right">Date</TableCell>

                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointmet.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Typography sx={{ fontWeight: 800 }}>  {row.patientName}</Typography>
                                </TableCell>

                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>

                                <TableCell align="right">


                                    <Button variant="contained" sx={{ background: "green", color: "white" }}>Panding  </Button>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;