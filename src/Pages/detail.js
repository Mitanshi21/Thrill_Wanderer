import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Destination() {
    const navigate=useNavigate();
    useEffect(() => {
        const UserName = localStorage.getItem('UserName');
        if (UserName === null || UserName === "") { // Check if email is null or empty
            navigate('/'); // Use navigate instead of navigator
        }
    }, []);
    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams();
    const i = searchParams.get('Id');
    useEffect(() => {
        fetch('http://localhost/Backend/destination.php') // Replace with the actual path to your PHP API
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);
    return (
        <>
        <Header/>
        <div className="Detail">
            <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>

                {data.map((item) => {
                    if (item.P_Id === i) {
                        return <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={"img/" + item.Img_2} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block" style={{ backdropFilter: 'blur(10px)', marginBottom: '30%', padding: '5%', borderRadius: '25px' }}>
                                    <h1>{item.D_Name}</h1>
                                    <h3>{item.State_Name}, India</h3><br />
                                    <Link to="/Book_Appointment" className="btn">Book Appointment</Link>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={"img/" + item.Img_3} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block" style={{ backdropFilter: 'blur(10px)', marginBottom: '30%', padding: '5%', borderRadius: '25px' }}>
                                    <h1>{item.D_Name}</h1>
                                    <h3>{item.State_Name}, India</h3><br />
                                    <Link to="/Book_Appointment" className="btn">Book Appointment</Link>
                                </div>
                            </div>
                        </div>;
                    }
                    console.log(item);
                })}

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {data.map((item) => {
                if (item.P_Id === i) {
                    return <div className="Place_Describe">
                        <h2>All About {item.D_Name}</h2>
                        <p>{item.Descr}</p>
                        <Link to="/Book_Appointment" className="btn">Book Appointment</Link>
                    </div>
                }
            })}
        </div>
        <Footer/>
        </>
    );
}