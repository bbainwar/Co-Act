const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <p>Co-ACT</p>
            </div>
            <div className="searchbar">
                <form>
                    <input type="text" placeholder="Search for Co-Actors and Co-spaces..." name="searchname"/>
                    <button type="submit"><img src="Search.png" alt="searchbutton" /></button>
                </form>
            </div>
            <div className="notificationandprofile">
                <button><img src="Alarm.png" alt="notification"/></button>
                <button><img src="Test Account.png" alt="avatar" /><img src="Sort Down.png" alt="SortDown" style={{height: '20px'}}/></button>
            </div>
        </nav>
    );
}
 
export default Navbar;
