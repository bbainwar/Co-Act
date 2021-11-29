import React, { Component } from "react";

class CreateCospace extends Component{
    render(){
        return(
            <div className="createcospace">
                <h1>Co-SPACE Creation</h1>
                <form>
                    <div className="cospacename">
                        <label htmlFor="coSpaceName">Co-Space Name:</label>
                        <input type="text" name="coSpaceName" id="coSpaceName" required/>
                    </div>
                    <div className="cospacedescription">
                        <label htmlFor="coSpaceDescription">Description:</label>
                        <textarea rows="15" cols="150" type="text" name="description" id="description" required />
                    </div>
                    <div className="coactornames">
                        <label htmlFor="coActorNames">Co-Actor Names:</label>
                        <input type="text" name="coSpaceName" id="coSpaceName" />
                    </div>
                </form>
            </div>
        );
    }
}



export default CreateCospace;