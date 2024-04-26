import { React, useState } from "react";

function FactCard({ fact, image, imageDescription }) {
  const [factVisible, setFactVisible] = useState(false);
  return (
    <div className="fact-card">
      <img src={image} alt={imageDescription} className="fact-card_image" />
      <div
        className={`fact-card_container ${
          factVisible ? "fact-card_container--visible" : ""
        }`}
        onClick={() => setFactVisible(!factVisible)}
        tabIndex={1}
      >
        <p className="fact-card_fact">{fact}</p>
      </div>
    </div>
  );
}

export default FactCard;
