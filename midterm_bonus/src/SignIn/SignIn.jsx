import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../Firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import loginPhoto from '../SignIn/Login_page_photo.jpg';
import './SignIn.css';

const SignIn = (props) => {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const login = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in both email and password.");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                props.onSignIn();
                history('/chat');
            })
            .catch((error) => {
              setError("Invalid email or password. Please try again.");
            });
    };

    return (
        <div className="auth-container">
            <img src={loginPhoto} alt="Login" width='60%'/>
            <h2>Login</h2>
            <form onSubmit={login} className="login_form">
                <input
                    type="text"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="login-button" type="submit">Login</button>
                {error && <div className="error">{error}</div>}
                <Link to="/signup" className="link-login">Don't have an account? Register here.</Link>
            </form>
        </div>
    );
}

export default SignIn;
