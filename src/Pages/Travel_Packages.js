import Travel1 from "../Image/Travel1.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Travel_Packages() {
    const navigate = useNavigate();
    useEffect(() => {
        const UserName = localStorage.getItem('UserName');
        if (UserName === null || UserName === "") { // Check if email is null or empty
            navigate('/'); // Use navigate instead of navigator
        }
    }, []);
    const [data, setData] = useState([]);
    let i = 0;
    let j = 0;
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
                <h1 className="Destination_Head" style={{ backgroundImage: `url(${Travel1})`, backgroundSize: 'cover' }}>Travel_Packages</h1>
                <div className="D_Content">
                    <div className="inner1">
                        <h2 className="mb-5">Inexpensive Trips</h2>
                        <div className="mostInner">
                            {data.map((item) => {
                                if (item.Price < 10000) {
                                    return <div className="card" style={{ backgroundImage: `url(${"img/" + item.Img_1})`, backgroundSize: 'cover' }}>
                                        <h2>{item.D_Name}</h2>
                                        <h4>{item.State_Name},India</h4>
                                        <Link to={"/Travel?Id=" + item.P_Id} className="btn">Show More..</Link>
                                    </div>;
                                }
                                console.log(item);
                            })}
                        </div>
                    </div>
                    <div className="inner1 inner2">
                        <h2 className="mb-5">Luxury Trips</h2>
                        <div className="mostInner">
                            {data.map((item) => {
                                if (item.Price >= 10000) {
                                    return <div className="card" style={{ backgroundImage: `url(${"img/" + item.Img_1})`, backgroundSize: 'cover' }}>
                                        <h2 id={"middleFont_"+item.P_Id}>{item.D_Name}</h2>
                                        <h4 id={"middleFont_"+item.P_Id}>{item.State_Name},India</h4>
                                        <Link to={"/Travel?Id=" + item.P_Id} className="btn">Show More..</Link>
                                    </div>;
                                }
                                console.log(item);
                            })}
                        </div>
                    </div>
                    {/* <div className="inner1 inner2">
                        <h2 className="mb-5">Luxury Trips</h2>
                        <div className="mostInner">
                            {/* <div className="gallery-container"> */}
                                {/* {data.map((item, index) => {
                                    if (item.Price >= 10000) {
                                        return (
                                            <div key={index} className="card" style={{ width: '18rem' }}>
                                                <img src={"img/" + item.Img_1} className="card-img-top" alt={item.D_Name} style={{ objectFit: 'cover', height: '200px' }} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.D_Name}</h5>
                                                    <p className="card-text">{item.State_Name}, India</p>
                                                    <Link to={"/Travel?Id=" + item.P_Id} className="btn btn-primary">Show More..</Link>
                                                </div>
                                            </div>
                                        );
                                    }
                                    console.log(item);
                                })} */}
                            {/* </div> */}
                        {/* </div> */}
                    {/*</div> */}
                </div>
            </div>
            <Footer />
        </>
    );
}