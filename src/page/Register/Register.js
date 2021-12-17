import React, { useState } from 'react';

import img from "../../img/login.png"
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})

    const { registerUser, isLoading, user, authError } = useAuth();

    const navigate = useNavigate()

    const handlOnBlur = (e) => {
        const fild = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData };
        newLoginData[fild] = value

        setLoginData(newLoginData)
    }
    const handlSubmit = (e) => {
        e.preventDefault()
        if (loginData.password !== loginData.password2) {
            alert("Your password is did't macth")
            return
        }

        registerUser(loginData.email, loginData.password, loginData.name, navigate)


    }
    return (
        <Container sx={{ flexGrow: 1 }}  >
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} sx={{ mt: 8, textAlign: "center" }} >
                    <Typography variant="h4" sx={{ fontWeight: 500 }} gutterBottom>
                        Regsiter
                    </Typography>
                    {
                        !isLoading && <form onSubmit={handlSubmit}>
                            <TextField
                                sx={{ width: '70%', m: 1 }}
                                id="standerd-basic"
                                label="Enter Your Name"
                                variant="standard"
                                name="name"
                                type="name"
                                onBlur={handlOnBlur}

                            />
                            <TextField
                                sx={{ width: '70%', m: 1 }}
                                id="standerd-basic"
                                label="Enter Email"
                                variant="standard"
                                name="email"
                                type="email"
                                onBlur={handlOnBlur}

                            />
                            <TextField
                                sx={{ width: '70%', m: 1 }}
                                id="standerd-basic"
                                label="Enter Password"
                                variant="standard"
                                type="password"
                                name="password"
                                onBlur={handlOnBlur}
                            />
                            <TextField
                                sx={{ width: '70%', m: 1 }}
                                id="standerd-basic"
                                label="ReType Password"
                                variant="standard"
                                type="password"
                                name="password2"
                                onBlur={handlOnBlur}
                            />

                            <Button variant="contained" sx={{ width: '70%', m: 1 }} type="submit">Register</Button>
                            <NavLink to="/login" sx={{ TextDecoder: 'none' }}>
                                <Button variant="text" > Alrady user? please Login</Button>
                            </NavLink>
                        </form>
                    }


                    {isLoading && <CircularProgress color="success" />}
                    {user?.email && <Alert severity="success">Register success </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%' }} src={img} alt="" srcset="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;