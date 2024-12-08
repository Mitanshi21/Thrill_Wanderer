import Home1 from "../Image/Home1.webp";
import Home2 from "../Image/Home2.webp";
import Home5 from "../Image/Home5.webp";
import Home6 from "../Image/Home6.jpg";
import Home7 from "../Image/Home7.webp";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
    const navigate=useNavigate();
    const [data, setData] = useState([]);
    let i = 0;
    let j = 0;
    useEffect(() => {
        fetch('http://localhost/Backend/blog.php') // Replace with the actual path to your PHP API
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);
    useEffect(() => {
        const UserName = localStorage.getItem('UserName');
        if (UserName === null || UserName === "") { // Check if email is null or empty
            navigate('/'); // Use navigate instead of navigator
        }
    }, []);
    const [data1, setData1] = useState([]);
    useEffect(() => {
        fetch('http://localhost/Backend/destination.php') // Replace with the actual path to your PHP API
            .then((response) => response.json())
            .then((data1) => setData1(data1))
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <Header />
            <div className="Home">

                <img src={Home1} alt="Home" />
                <h1 className="centered">EXPLORE</h1>
                <img src={Home2} alt="Home" className="Home2" />
                <div className="Home_Content row container">
                    <div className="col-sm-6">
                        <p>We create experience, we create memories, we care about YOU.</p>
                    </div>
                    <div className="col-sm-6 mt-2">
                        <button className="btn">Book Appointment</button>
                    </div>
                </div>
                <div className="Home_Content2">
                    <div className="row">
                        <div className="col-sm-3" style={{ marginLeft: '5%' }}>
                            <h2>Our Top Destinations</h2>
                            <p>Each destination offers a unique experience, inviting travelers to create lifelong memories in these extraordinary locations.</p>
                            <button className="btn">Book Appointment</button>
                        </div>
                        <div className="col-sm-1"></div>
                        {data1.map((item) => {
                            if (i < 2) {
                                i = i + 1;
                                return <Link className="col-sm-3" to={"/detail?Id=" + item.P_Id}>
                                    <div className="card" style={{ backgroundImage: `url(${"img/" + item.Img_1})`, backgroundSize: 'cover' }}><div class="card-img-overlay">
                                        <h4 class="card-title">{item.D_Name}</h4>
                                        <p class="card-text">{item.State_Name}, India</p>
                                        <button className="btn">Click For More Info..</button>
                                    </div></div>

                                </Link>;
                            }

                        })}


                    </div>
                </div>
                <div className="Home_Content3">
                    <div className="container">
                        <h2><span>Awesome</span> Travel Packages</h2>
                        <p>Each destination offers a unique experience, inviting travelers to create lifelong memories in these extraordinary locations.</p>
                        <div className="row">
                            {data1.map((item) => {
                                if (j < 3) {
                                    j = j + 1;
                                    return <div className="col-sm-3">
                                        <img alt=".." src={"img/" + item.Img_2} className="col-6" />
                                        <div>
                                            <h4>Thriller Trip In {item.D_Name}</h4><hr />
                                            <h5>Starting from</h5>
                                            <h4>{item.Price} Rs.</h4>
                                            <Link to={"/Travel?Id=" + item.P_Id} className="btn">Show Details</Link>
                                        </div>
                                    </div>;
                                }

                            })}
                        </div>
                        <Link className="btn" to="/Travel_Packages">Show All Packages</Link>
                    </div>
                </div>
                <div className="Home_Content4">
                    <div class="overlay">
                        <h2>Travel the World & the 7 Seas<br />
                            <Link to="/Destination" className="btn">View All Destinations</Link>
                        </h2>

                    </div>
                </div>
                <div className="Home_Content5">
                    <div className="row container">
                        <div className="col-10">
                            <h3><span>Travel Blog</span> Created For You</h3>
                            <p>We share our experiences, tips and travel stories to inspire and guide our readers in their own wanderlust adventures. From hidden gems to popular destinations, we showcase the beauty and diversity of the world, and promote responsible and sustainable travel.</p>
                        </div>
                        <div className="col-2">
                            <Link to="/Blog" className="btn btn1">View All Blogs</Link>
                        </div>
                    </div>
                    <div className="items">
                        {data.map((item) => (

                            <div className="card" style={{ backgroundImage: `url(${"img/" + item.B_Img})`, backgroundSize: 'cover' }}>
                                <h2>{item.B_Title}</h2>
                                <h4>-{item.B_Name}</h4><br />

                                <Link to={"/Blog?Id=" + item.B_Id} className="btn">Show More..</Link>
                            </div>

                        ))}

                    </div>

                </div>
                <div className="exp" style={{ backgroundImage: `url(${Home7})`, backgroundSize: 'cover' }}>
                    <h2><span>Experiences </span> We Have Offered</h2>
                    <div className="box">
                        <p>Our trip to Thailand organized through this travel website was simply unforgettable. The attention to detail and personalized itinerary allowed us to explore the best of Bangkok, immerse ourselves in the tranquility of Chiang Mai, and unwind on the stunning beaches of Phuket.</p><br />
                        <p>The accommodations were top-notch, the guides were knowledgeable, and the overall experience exceeded our expectations. We can't wait to book our next adventure with this exceptional travel service.</p><br />
                        <h5>-Dakota Wood</h5>
                        <h5>Founder at Acme</h5>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Home;