import { React, useState } from "react";

function Accordion({
  title,
  description1,
  description2,
  description3,
  image,
  imagDescription,
}) {
  const [active, setActive] = useState(false);
  return (
    <section className="accordion">
      <h2 className="accordion_title" onClick={() => setActive(!active)}>
        {title}{" "}
        <i
          className={`accordion_icon ${
            active ? "gg-math-minus" : "gg-chevron-down"
          }`}
        />
      </h2>
      {active && (
        <div className="accordion_content">
          <div className="accordion_image-container">
            <img
              src={image}
              alt={imagDescription}
              className="accordion_image"
            />
          </div>
          <div className="accordion_description">
            <p className="accordion_paragraph">{description1}</p>
            <p className="accordion_paragraph">{description2}</p>
            <p className="accordion_paragraph">{description3}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Accordion;
