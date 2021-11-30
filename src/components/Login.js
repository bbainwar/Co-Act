import React from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const clientId = "956293473525-6ljbo3kpik2mgu1v2jjhktaedj7he830.apps.googleusercontent.com";

const Login = () => {

    const onSuccess = (res) => {
      axios({
        method: "POST",
        url: "users/add",
        data: {
          tokenId: res.tokenId
        }
      }).then(response => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('pictureUrl', response.data.user.pictureUrl);
        localStorage.setItem('current_email',response.data.user.pictureUrl);
        window.location.href = '/mainpage';
      }).catch(err => {
        console.log('Error: ' + err);
      })
    };
      
    const onFailure = (res) => {
      console.log('Login failed: ', res);
    };

    return ( 
        <div className="googlelogin">
            <GoogleLogin
              clientId={clientId}
              render = { renderProps => (
                <button onClick={ renderProps.onClick } disabled={ renderProps.disabled }><img src="/images/Google.png" alt="googlelogo"/><p>Sign In</p></button>
              ) 
              }
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