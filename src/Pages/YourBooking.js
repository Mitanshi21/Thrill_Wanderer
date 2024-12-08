import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function YourBooking() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        const UserName = localStorage.getItem('UserName');
        const U_Id = localStorage.getItem('U_Id');
        if (UserName === null || UserName === "") { // Check if email is null or empty
            navigate('/'); // Use navigate instead of navigator
        }
        fetch('http://localhost/Backend/yourBooking.php?Id=' + U_Id) // Replace with the actual path to your PHP API
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    const cancelBooking = (Id) => {
        fetch('http://localhost/Backend/cancelBooking.php?Id=' + Id).then(alert("Successfully Cancelled!!")).then( window.location.reload());
    }

    return (
        <>
            <Header />
            <div className="YourBooking">
                <div className="container">
                <span><h1>All Your Booking:</h1></span>
                <table className="table">
                    <tr>
                        <th>Id</th>
                        <th>Tour_Description</th>
                        <th>Travel_Date</th>
                        <th>Duration</th>
                        <th>No_Person</th>
                        <th>Contact_No</th>
                        <th>Status</th>
                        <th>Cancel</th>
                    </tr>
                    {data.map((item) => {
                        if (item.Status == "Pending")
                            return (
                                <tr>
                                    <td>{item.Id}</td>
                                    <td>{item.Tour_Descr}</td>
                                    <td>{item.Travel_Date}</td>
                                    <td>{item.Duration}</td>
                                    <td>{item.No_Person}</td>
                                    <td>{item.Contact_No}</td>
                                    <td>{item.Status}</td>
                                    <td><button className="btn btn-primary form-control" onClick={() => cancelBooking(item.Id)}>Cancel</button></td>
                                </tr>
                            );
                        else
                            return (<tr>
                                <td>{item.Id}</td>
                                <td>{item.Tour_Descr}</td>
                                <td>{item.Travel_Date}</td>
                                <td>{item.Duration}</td>
                                <td>{item.No_Person}</td>
                                <td>{item.Contact_No}</td>
                                <td>{item.Status}</td>
                            </tr>);
                        console.log(item);
                    })}
                </table>
                </div>
            </div>
            <Footer />
        </>
    );
}