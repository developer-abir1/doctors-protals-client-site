import React, { useState } from 'react';
import Navigation from '../../../Share/Navigation/Navigation';
import ApponinmantHeader from '../ApponimantHeader/ApponinmantHeader';
import AvilableAppoinment from '../AvilableAppoinment/AvilableAppoinment';

const Appoinment = () => {

    const [date, setDate] = useState(new Date());

    return (
        <div>
            <Navigation></Navigation>
            <ApponinmantHeader date={date} setDate={setDate}></ApponinmantHeader>
            <AvilableAppoinment date={date}></AvilableAppoinment>
        </div>
    );
};

export default Appoinment;