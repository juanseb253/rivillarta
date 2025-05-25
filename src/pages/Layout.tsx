import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar";

import "../styles/Layout.css"
import Footer from "../Components/Footer";


export const Layout = () => {
    return <>

        <Navbar />

        <Outlet />

        <Footer />
    </>
}