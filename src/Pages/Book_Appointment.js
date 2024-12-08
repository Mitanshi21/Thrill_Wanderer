import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

export default function Book_Appointment() {
    const navigate = useNavigate();
    const [U_Id, setU_Id] = useState("");

    useEffect(() => {
        const UserName = localStorage.getItem('UserName');
        let User_Id = localStorage.getItem('U_Id');
        if (UserName === null || UserName === "") {
            navigate('/');
        }
        else
            setU_Id(User_Id);
    }, []);

    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const formData = new FormData();
    formData.append("Name", inputs.Name);
    formData.append("State", inputs.State);
    formData.append("Email", inputs.Email);
    formData.append("Tour_Descr", inputs.Tour_Descr);
    formData.append("Travel_Date", inputs.Travel_Date);
    formData.append("Duration", inputs.Duration);
    formData.append("No_Person", inputs.No_Person);
    formData.append("Contact_No", inputs.Contact_No);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost/Backend/book_appointment.php?Id=${U_Id}`, {
            method: 'POST',
            body: formData,
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            if (data.success) {
                alert("Successfully Booked!!");
            } else {
                if (data.message) {
                    alert(data.message);
                }
            }
        } else {
            alert("An error occurred. Please try again later!!");
        }

    }
    return (
        <>
            <Header />
            <div className="Book_Appointment">
                <div className="row container">
                    <div className="col-5">
                        <h1>How It Works</h1>
                        <hr />
                        <li>Tell us details of your holiday plan.</li>
                        <li>After You Submit The Form, one of our travel experts will get back to you with customised holiday package based on your requirement, within 24 hours.</li>
                        <li>Grab the deal and start packing your bags for an incridible holiday with Thrill_Wanderer.</li>
                        <div className="icon">
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <hr />
                        <h4>Call Us For Details</h4>
                        <h3>+91 9173730673</h3>
                    </div>
                    <div className="col-5">
                        <h1>Request a <span>QUOTE</span></h1>
                        <hr />
                        <form method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-6">
                                    Full Name:
                                    <input type="text" className="form-control" placeholder="Your Name." id="Name" name="Name" onChange={handleChange} required />
                                </div>
                                <div className="col-6">
                                    State:
                                    <select id="State" name="State" className="form-control" onChange={handleChange} required>
                                        <option value="">Select State</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Maharastra">Maharastra</option>
                                        <option value="Aandrapradesh">Aandrapradesh</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Himachal_Pradesh">Himachal_Pradesh</option>
                                    </select>
                                </div>
                            </div>
                            Email Id:
                            <input type="text" className="form-control" placeholder="Your Email Id." id="Email" name="Email" onChange={handleChange} required />
                            Tour Description:
                            <textarea className="form-control" id="Tour_Descr" name="Tour_Descr" placeholder="Enter Your Tour Description" onChange={handleChange} required></textarea>
                            <div className="row">
                                <div className="col-6">
                                    Travel Dates:
                                    <input type="date" className="form-control" id="Travel_Date" name="Travel_Date" onChange={handleChange} required />
                                </div>
                                <div className="col-6">
                                    Duration of Stay:
                                    <input type="number" id="Duration" name="Duration" placeholder="Duration Of Stay." className="form-control" onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    No of Person:
                                    <input type="number" className="form-control" id="No_Person" name="No_Person" placeholder="No of Person." onChange={handleChange} required />
                                </div>
                                <div className="col-6">
                                    Mobile No:
                                    <input type="number" id="Contact_No" name="Contact_No" className="form-control" placeholder="Mobile No." onChange={handleChange} required maxLength={10} />
                                </div>
                            </div>
                            <input type="submit" className="form-control btn mt-3" id="btnSubmit" name="btnSubmit" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}