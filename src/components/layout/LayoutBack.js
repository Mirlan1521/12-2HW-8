import React from 'react';

import Back from "../back/Back";

import {Outlet} from "react-router-dom";


const LayoutBack = () => {
    return (
        <div>
            <Back/>
            <Outlet/>
        </div>
    );
};

export default LayoutBack;