import { FormGroup } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './RegisterForm.css';



const RegisterForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [eventDetails, setEventDetails] = useState({ date: '', description: '', event: '' });

    const eventData = (event) => {
        setEventDetails({ ...eventDetails, [event.target.name]: event.target.value })
    }

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const registerHandler = (event) => {
        event.preventDefault()

        const volunteer = { ...loggedInUser, ...eventDetails }
        fetch('https://polar-chamber-66344.herokuapp.com/addVolunteer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(volunteer)
        })
            .then(res => res.json())
            .then(result => {
                history.push('/task')
            })
      
    }
    return (
        <div>
            <div className="logo">
                <Link to='/'>
                    <img style={{ height: '80px' }} src={logo} alt="" />
                </Link>
            </div>
            <form onSubmit={registerHandler} method="post">
                <FormGroup className="register-form">
                    <h3>Register as a Volunteer</h3>
                    <input type="text" name="name" value={loggedInUser.name} required />


                    <input type="text" name="email" value={loggedInUser.email} required />


                    <input type="date" onChange={(event) => eventData(event)} name="date" value={eventDetails.date} placeholder="dd/mm/yyyy" required />

                    <input type="text" onChange={(event) => eventData(event)} name="description" value={eventDetails.description} placeholder="Description" required />


                    <input type="text" onChange={(event) => eventData(event)} value={eventDetails.event} name="event" placeholder="Organize books at the library" required />
                    


                    <button type="submit" className="register-btn">Registration</button>

                </FormGroup>
            </form>
        </div>
    );
};

export default RegisterForm;