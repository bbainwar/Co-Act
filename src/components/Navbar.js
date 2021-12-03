import React from 'react';

const Navbar = () => {
    
    const pictureUrl = JSON.parse(localStorage.getItem('user')).photos[0].value;

    const logout = () => {
        window.open("http://localhost:8000/auth/logout", "_self");
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
                <button><img src={pictureUrl} alt="avatar" style={{ borderRadius: '50%' }}/></button>
                <button onClick={logout}><img src="images/Sign Out.png"/></button>
            </div>
        </nav>
    );
}
 
export default Navbar;
