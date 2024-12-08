import { Link, useNavigate } from 'react-router-dom';
import Login1 from '../Image/Home5.webp';
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("uname", username);
        formData.append("pwd", password);

        try {
            const response = await fetch('http://localhost/Backend/login_user.php', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();

                if (data.success) {
                    localStorage.setItem('UserName',username);
                    localStorage.setItem('U_Id',data.U_Id);
                    navigate('/Home');
                } else {
                    setError("Invalid UserName or Password!!");
                }
            } else {
                setError("An error occurred. Please try again later!!");
            }
        } catch (error) {
            setError("An error occurred. Please try again later!!");
        }
    };
    
    return (
        <div className="Login">
            <div className="main" style={{ backgroundImage: `url(${Login1})`, backgroundSize: 'cover' }}>
                <h1>Login</h1>
                <hr />
                <form method="post" onSubmit={handleSubmit}>
                    Username:
                    <input type="text" id="uname" name="uname" placeholder="Enter Username." class="form-control"
                        required value={username} onChange={(e) => setUsername(e.target.value)}/><br />
                    Password:
                    <input required type="password" id="pwd" name="pwd" placeholder="Enter Password." class="form-control"
                        maxlength="8" value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                    <span className="error">{error}<br/></span>
                    <input type="submit" id="btnSubmit" name="btnSubmit" text="Submit" class="btn btn-outline-primary" />
                    <p>New User?
                        <Link class="link-primary bottom-100" to="/SignUp">SignUp</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}