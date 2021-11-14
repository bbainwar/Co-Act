import React from 'react';
import GoogleLogout from 'react-google-login';

const clientId = "956293473525-6ljbo3kpik2mgu1v2jjhktaedj7he830.apps.googleusercontent.com";

const Navbar = () => {
    const onLogoutSuccess = (res) => {
        console.log('logout');
    }

    const logout = (e) => {
        localStorage.clear();
        window.location.href = 'http://localhost:3000';
    }

    return ( 
        <nav>
            <div className="logo">
                <p>Co-ACT</p>
            </div>
            <div className="searchbar">
                <form>
                    <input type="text" placeholder="Search for Co-Actors and Co-spaces..." name="searchname"/>
                    <button type="submit"><img src="images/Search.png" alt="searchbutton" /></button>
                </form>
            </div>
            <div className="notificationandprofile">
                <button><img src="images/Alarm.png" alt="notification"/></button>
                <button><img src={localStorage.getItem('pictureUrl')} alt="avatar" style={{ borderRadius: '50%' }}/></button>
                <GoogleLogout
                    clientId={clientId}
                    render = { renderProps => (
                        <button onClick={ logout } disabled={ renderProps.disabled }><img src="/images/Google.png" alt="googlelogo" style={{ height: '40px' }}/></button>
                        ) 
                        }
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                />
            </div>
        </nav>
    );
}
 
export default Navbar;
