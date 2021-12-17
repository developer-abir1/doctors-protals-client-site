import { Grid } from '@mui/material';
import * as React from 'react';
import Caleder from '../../../Share/Calender/Caleder'
import Appointments from '../Appointment/Appointments';


const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Caleder

                    date={date}

                    setDate={setDate}
                />
            </Grid>
            <Grid item xs={8}>
                <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;