import React from "react";

const CoactorsSection = () => {
  const displayCoactors = () => {
    const coactors = JSON.parse(
      localStorage.getItem("recent_cospace_clicked_coactors")
    );
    return coactors.map((coactor, index) => (
      <div key={index} className="coactor">
        <div className="coactor">{coactor.text}</div>
      </div>
    ));
  };

  return (
    <div className="coactorssection">
      <h1>Co-Actors</h1>
      <div className="coactorList">{displayCoactors()}</div>
    </div>
  );
};

export default CoactorsSection;
