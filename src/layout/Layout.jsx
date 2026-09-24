import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LayoutPage() {
    return (
        <Fragment>
            <header>
                <Navbar/>
                <hr/>
            </header>
            <main>
                <Outlet/>
            </main>
            <hr/>
            <Footer/>
        </Fragment>
    )
}

export default LayoutPage;