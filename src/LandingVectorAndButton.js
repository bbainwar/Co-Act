const LandingVectorAndButton = () => {
    
    const nextpage = () => {
        
    }

    return (
        <div className="vectorandbutton">
            <div className="vectorimage">
                <img src="landingPageVector.png" alt="landingVector" />
            </div>
            <div className="button1">
                <button onClick = {nextpage}>Get Started</button>
            </div>
        </div>
    );
}
 
export default LandingVectorAndButton;