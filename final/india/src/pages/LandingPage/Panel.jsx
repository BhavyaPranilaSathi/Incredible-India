import React from "react";

function Panel({
  title,
  description,
  image,
  imageDescription,
  linkUri,
  linkText,
  setPage,
}) {
  return (
    <section className="panel">
      <h3 className="panel_title">{title}</h3>
      <img className="panel_image" src={image} alt={imageDescription} />
      <p className="panel_description">{description}</p>
      <a
        href={linkUri}
        className="panel_link"
        onClick={(event) => {
          event.preventDefault();
          setPage(linkUri);
        }}
      >
        {linkText}
      </a>
    </section>
  );
}

export default Panel;
