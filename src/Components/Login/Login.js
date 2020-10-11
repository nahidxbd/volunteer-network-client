import React, { useContext } from 'react';
import logo from '../../logos/Group 1329.png';
import googleLogo from '../../logos/google.png';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const googleSignInHandler = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {

            const { displayName, email } = result.user;
            const signInUser = { name: displayName, email };
            
            setLoggedInUser(signInUser);
            history.replace(from);
            history.push('/registerForm');

        }).catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);

        });

    }
    return (

        <div>

            <div className="logo">
                <Link to='/'>
                    <img style={{ height: '60px' }} src={logo} alt="" />
                </Link>
            </div>

            <div className="login-box">
                <div className="google-form">
                    <h3 style={{ textAlign: 'center' }}>Login With</h3>
                    <div
                        onClick={googleSignInHandler} style={{ cursor: "pointer" }} className="google">
                        <img style={{ width: "30px", height: "30px", marginRight: "25px" }} src={googleLogo} alt="" />
                        <p style={{ textAlign: 'center' }}>Continue with Google</p>
                    </div>
                    <div>
                    </div>

                    <span>Don't have an account ?</span>

                    <span>Create an account? </span>

                </div>
            </div>
        </div>



    );
};

export default Login;