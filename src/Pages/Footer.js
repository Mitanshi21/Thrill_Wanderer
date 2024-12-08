import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='Footer'>
            <div className='row'>
                <div className='col-sm-4'>
                    <h1>Trill Wanderer</h1>
                    <p>Each destination offers a unique experience, inviting travelers to create lifelong memories in these extraordinary locations.</p>
                    <h1>Contact Me!!</h1>
                    <p><span>+91 9173730673</span></p>
                </div>
                <div className='col-sm-4'>
                    <h1>Quick Links</h1>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Destination'>Destination</Link></li>
                    <li><Link to='/Book_Appointment'>Book Now</Link></li>
                    <li><Link to='/Travel_Packages'>Travel Packeges</Link></li>
                </div>
                <div className='col-sm-4'>
                    <h1>Legal</h1>
                    <li><Link to='/Home'>What is Thrill Wanderer?</Link></li>
                </div>
            </div>
            <hr />
            <div className='Footer2'>
                <p>© 2023 Trill_Wanderer, Inc</p>
                <div>
                    <i class="fa-brands fa-instagram"> </i>
                    <i class="fa-brands fa-facebook"> </i>
                </div>
            </div>
        </div>
    );
}

export default Footer;