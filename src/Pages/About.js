import React from "react";
import About1 from "../Image/About1.webp";
import About2 from "../Image/About2.webp";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function About() {
    const navigate=useNavigate();
    useEffect(() => {
        const UserName = localStorage.getItem('UserName');
        if (UserName === null || UserName === "") { // Check if email is null or empty
            navigate('/'); // Use navigate instead of navigator
        }
    }, []);
    return (
        <>
        <Header/>
        
        <div className="About">
            <h1 className="About_Head" style={{ backgroundImage: `url(${About1})`, backgroundSize: 'cover' }}>ABOUT</h1>
            <div className="About_Content container">
                <div className="row">
                    <div className="col-4">
                        <h2 className="mb-3">Our Top Destinations</h2>
                        <p className="mb-3">Welcome to Haven, your ultimate destination for exceptional travel experiences. We are a passionate team of travel enthusiasts dedicated to crafting unforgettable journeys that inspire and delight.</p>
                        <p className="mb-3">At Haven, we believe that travel is not just about visiting new places; it's about immersing yourself in the beauty of diverse cultures, forging connections, and creating lifelong memories. With our extensive knowledge and expertise, we curate bespoke itineraries tailored to your preferences, ensuring every moment of your adventure is filled with awe and wonder.</p>
                        <Link className="btn" to="/Book_Appointment">Book Appointment</Link>
                    </div>
                    <div className="col-8">
                        <img src={About2} alt="..." />
                        <div style={{textAlign:'end'}}>
                            <h3>500+ Happy</h3>
                            <h3>Customers</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default About;