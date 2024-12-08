import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate=useNavigate();
    const handleClick = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <div className="Header sticky-top">
            <nav className="navbar navbar-expand-lg" >
                <div class="container-fluid">
                    <Link className="nav-link" to="/Home">Thrill_Wanderer</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" collapse navbar-collapse" id="navbarTogglerDemo01" style={{ justifyContent: 'flex-end', flexGrow: 0 }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ justifyContent: 'flex-end' }}>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Home"> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About"> About </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Destination"> Destinations </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Travel_Packages"> Travel Packages </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/YourBooking"> YourBooking </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Book_Appointment"> Book Appointment </Link>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="nav-link btn1 btn btn-outline-danger" onClick={handleClick}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;