import React, { useState } from 'react';
import img from "../../../img/login.png"
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({})

    const { isLoading, user, authError, loginUser, googleSingIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const handleOnBlur = (e) => {
        const fild = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData };
        newLoginData[fild] = value
        setLoginData(newLoginData)
    }
    const handlSubmit = (e) => {

        loginUser(loginData.email, loginData.password, navigate, location)


        e.preventDefault()
    }
    const googleSingIns = () => {
        googleSingIn(navigate, location)
    }
    return (
        <Container sx={{ flexGrow: 1 }}  >
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} sx={{ mt: 8, textAlign: "center" }} >
                    <Typography variant="h4" sx={{ fontWeight: 500 }} gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handlSubmit}>
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standerd-basic"
                            label="Enter Email"
                            type="email"
                            variant="standard"
                            name="email"
                            onBlur={handleOnBlur}

                        />
                        <TextField
                            sx={{ width: '70%', m: 1 }}
                            id="standerd-basic"
                            label="Password"
                            variant="standard"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                        />

                        <Button variant="contained" sx={{ width: '70%', m: 1 }} type="submit">Login</Button>
                        <NavLink to="/registar">
                            <Button variant="text" > New user ? please Regsiter</Button>
                        </NavLink>
                    </form>



                    {isLoading && <CircularProgress color="success" />}
                    {user?.email && <Alert severity="success">Login success </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    <hr />
                    <Button onClick={googleSingIns} variant="contained">Google Sing in</Button>

                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%' }} src={img} alt="" srcset="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;