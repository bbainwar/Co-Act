import React from 'react'
import GoogleLogin from 'react-google-login';

const clientId = "956293473525-6ljbo3kpik2mgu1v2jjhktaedj7he830.apps.googleusercontent.com";

const Login = () => {

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
          `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
      };
      
    const onFailure = (res) => {
      console.log('Login failed: res:', res);
      alert(
        `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
      );
    };

    return ( 
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
            />
        </div>
    );
}
 
export default Login;