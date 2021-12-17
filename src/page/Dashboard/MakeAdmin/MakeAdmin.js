import { Button, TextField, Box, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hook/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const { token } = useAuth()




    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const adminSubmit = (e) => {
        const user = { email }
        e.preventDefault();

        fetch('https://mighty-basin-45037.herokuapp.com/user/admin', {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true,)
                }

                if (data.matchedCount) {
                    setError(true)
                    console.log(data)
                }
            })
    }
    return (
        <div>
            <h1>This is admin</h1>


            <form onSubmit={adminSubmit} style={{ display: "flex", justifyContent: 'center' }}>
                <TextField onBlur={handleOnBlur} id="standard-basic" label="Email" sx={{ width: "50%" }} type="email" variant="standard" />
                <Button type='submit' variant="contained">Add admin</Button>
            </form>


            {success && <Alert sx={{ mt: 5 }} security='success'> Make An admin successfully</Alert>}
            {error && <Alert sx={{ mt: 5 }} severity="warning">  Alrady make admin</Alert>}
        </div>
    );
};

export default MakeAdmin;