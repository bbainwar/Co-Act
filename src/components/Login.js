import React from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const clientId = "956293473525-6ljbo3kpik2mgu1v2jjhktaedj7he830.apps.googleusercontent.com";

const Login = () => {

    const google = () => {
      window.open("http://localhost:8000/auth/google", "_self")
    }

    return ( 
        <div className="googlelogin">
            <button onClick={google}><img src="/images/Google.png" alt="googlelogo"/><p>Sign In</p></button>
        </div>
    );
}
 
export default Login;