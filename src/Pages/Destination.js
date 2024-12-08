import Destination1 from "../Image/Destination1.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Destination() {
    const navigate = useNavigate();
    useEffect(() => {
        const UserName = localStorage.getItem('UserName');
        if (UserName === null || UserName === "") { // Check if email is null or empty
            navigate('/'); // Use navigate instead of navigator
        }
    }, []);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost/Backend/destination.php') // Replace with the actual path to your PHP API
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);
    return (
        <>
            <Header />
            <div className="Destination">
                <h1 className="Destination_Head" style={{ backgroundImage: `url(${Destination1})`, backgroundSize: 'cover' }}>Destinations</h1>
                <div className="D_Content">
                    <div className="inner1">
                        <h2 className="mb-5">Beach Destination</h2>
                        <div className="scroll-container">
                            <div className="mostInner">
                                {data.map((item) => {
                                    if (item.D_Type === "Beach") {
                                        return <div className="card" style={{ backgroundImage: `url(${"img/" + item.Img_1})`, backgroundSize: 'cover' }}>
                                            <h2>{item.D_Name}</h2>
                                            <h4>{item.State_Name},<br/>India</h4>
                                            <Link to={"/detail?Id=" + item.P_Id} className="btn">Show More..</Link>
                                        </div>;
                                    }
                                    console.log(item);
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="inner1 inner2">
                        <h2 className="mb-5">Mountains Destination</h2>
                        <div className="mostInner">
                            {data.map((item) => {
                                if (item.D_Type === "Mountain") {
                                    return <div className="card" style={{ backgroundImage: `url(${"img/" + item.Img_1})`, backgroundSize: 'cover' }}>
                                        <h2>{item.D_Name}</h2>
                                        <h4>{item.State_Name},India</h4>
                                        <Link to={"/detail?Id=" + item.P_Id} className="btn">Show More..</Link>
                                    </div>;
                                }
                                console.log(item);
                            })}
                        </div>
                    </div>
                    <div className="inner1 inner3">
                        <h2 className="mb-5">Trekking - Thrilling Adventures</h2>
                        <div className="mostInner">
                            {data.map((item) => {
                                if (item.D_Type === "Trekking") {
                                    return <div className="card" style={{ backgroundImage: `url(${"img/" + item.Img_1})`, backgroundSize: 'cover' }}>
                                        <h2>{item.D_Name}</h2>
                                        <h4>{item.State_Name},India</h4>
                                        <Link to={"/detail?Id=" + item.P_Id} className="btn">Show More..</Link>
                                    </div>;
                                }
                                console.log(item);
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}