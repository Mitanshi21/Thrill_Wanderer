import { Link,  useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Travel() {
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
        <div className="Travel_Detail">
            {data.map((item) => {
                if (item.P_Id === i ) {
                    return <div>
                        <h2>{item.D_Name}</h2>
                        <h4>{item.State_Name},India</h4><br/>
                        <h5>Time Duration Of This Trip: {item.Duration} Days</h5>
                        <h6>Amout: {item.Price} Rs.</h6>
                        <Link to="/Book_Appointment" className="btn">Book_Appointment</Link>
                        <div className="t_inner">
                            <div className="card" style={{ backgroundImage: `url(${"img/"+item.Img_1})`, backgroundSize: 'cover' }}></div>
                            <div className="card" style={{ backgroundImage: `url(${"img/"+item.Img_2})`, backgroundSize: 'cover' }}></div>
                            <div className="card" style={{ backgroundImage: `url(${"img/"+item.Img_3})`, backgroundSize: 'cover' }}></div>
                        </div>
                        <div className="t_inner2">
                            <h2>About {item.D_Name}</h2>
                            <h5>{item.Descr}</h5>
                            <h1>Package Detail:</h1>
                            <h3>Day 1:</h3>
                            <h5>{item.Day_1}</h5>
                            <h3>Day 2:</h3>
                            <h5>{item.Day_2}</h5>
                            <h3>Day 3:</h3>
                            <h5>{item.Day_3}</h5>
                            <h3>Day 4:</h3>
                            <h5>{item.Day_4}</h5>
                            <h3>Day 5:</h3>
                            <h5>{item.Day_5}</h5>
                            <Link to="/Contact" className="btn">For More Details Contact Us</Link>
                        </div>
                    </div>;
                }
                console.log(item);
            })}
        </div>
        <Footer/>
        </>
    );
}
