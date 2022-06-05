import React from 'react';
import Header from "../header/Header";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import {Outlet} from "react-router-dom";
const Layout = () => {
    return (
        <div>
            <Header/>

            <Menu/>


            <Outlet/>

            <Footer/>
        </div>
    );
};

export default Layout;