

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from './Navbar/Navbar';

const Root = () => {


    return (
        <div>
            
            <Navbar />
            <div className="container mx-auto my-6">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;