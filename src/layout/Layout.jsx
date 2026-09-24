import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LayoutPage() {
    return (
        <Fragment>
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default LayoutPage;