import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Blog() {
    const navigate = useNavigate();
    useEffect(() => {
        const UserName = localStorage.getItem('UserName');
        if (UserName === null || UserName === "") { // Check if email is null or empty
            navigate('/'); // Use navigate instead of navigator
        }
    }, []);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost/Backend/blog.php') // Replace with the actual path to your PHP API
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);
    const [searchParams] = useSearchParams();
    const i = searchParams.get('Id');
    return (
        <>
            <Header />
            <div className="Blog">
                {data.map((item) => {
                    if (item.B_Id === i) {
                        return <div className="Blog_Describe" style={{ backgroundImage: `url(${"img/" + item.B_Img})`, backgroundSize: 'cover' }}>
                            <h1>{item.B_Title}</h1>
                            <h3>-{item.B_Name}</h3>
                            <h2>Description</h2>
                            <p>{item.B_Descr}</p>
                            <h2>Conclusion</h2>
                            <p>{item.B_Conclusion}</p>
                            <Link to="/Book_Appointment" className="btn">Book Appointment</Link>
                        </div>
                    }
                    else{
                        return <div className="Blog_Describe">
                            <h1>{item.B_Title}</h1>
                            <h3>-{item.B_Name}</h3>
                            <h2>Description</h2>
                            <p>{item.B_Descr}</p>
                            <Link to={"/Blog?Id=" + item.B_Id} className="btn">Show More..</Link>
                        </div>
                    }
                })}
            </div>
            <Footer />
        </>
    );
}