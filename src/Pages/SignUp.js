import Login1 from '../Image/Home6.jpg';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignUp() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState('');
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        if (inputs.pwd !== inputs.Cpwd) {
            setError('Passwords do not match');
            return;
        }
        const form = $(event.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setInputs(data);
            },
        });
        console.log(inputs);
        navigate('/');
    }

    return (
        <div className="SignUp">
            <div className="main" style={{ backgroundImage: `url(${Login1})`, backgroundSize: 'cover' }}>
                <h1>Sign Up</h1>
                <hr />
                <form method="post" className='row' onSubmit={handleSubmit} action='http://localhost/Backend/signUp.php'>
                    <div className='col-6'>
                        Name:
                        <input type="text" id="Name" name="Name" placeholder="Enter Name." class="form-control"
                            required onChange={handleChange} /><br />
                        Username:
                        <input type="text" id="uname" name="uname" placeholder="Enter Username." class="form-control"
                            required onChange={handleChange} /><br />
                        Password:
                        <input required type="password" id="pwd" name="pwd" placeholder="Enter Password." class="form-control"
                            maxlength="8" onChange={handleChange} /><br />
                    </div>
                    <div className='col-6'>
                        Address:
                        <textarea required id='Address' name='Address' placeholder='Enter Address.' className='form-control' rows={4} onChange={handleChange}></textarea><br />
                        Confirm Password:
                        <input required type="password" id="Cpwd" name="Cpwd" placeholder="Enter Confirm Password." class="form-control"
                            maxlength="8" onChange={handleChange} /><br />
                    </div>
                    <span id="error" className="error">{error}</span>
                    <input type="submit" id="btnSubmit" name="btnSubmit" text="Submit" class="btn btn-outline-primary" />
                    <p>Alredy Login?
                        <Link class="link-primary bottom-100" to="/">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}