import { Link } from 'react-router-dom';

const CospaceSection = () => {
    return (
        <div className="cospacesection">
            <div className="mainpageheading">
                <h1>Co-SPACES</h1>
            </div>
            <div className="cospacelist">
                <div className="cospace"></div>
                <div className="cospace"></div>
                <div className="cospace"></div>
                <div className="cospace"></div>
                <div className="cospace"></div>
                <div className="cospace"></div>
                <div className="cospace"></div>
                <div className="cospace"></div>
            </div>
            <Link to = "/createcospace">
                <button className="createcospacebutton">
                    <img src = "/images/Add User Group Man Man.png"/>
                    <p>Create</p>
                </button>
            </Link>
        </div>
    );
}
 
export default CospaceSection;