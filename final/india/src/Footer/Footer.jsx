import React from "react";

import "./Footer.css";

const footerLinks = [
  {
    text: "Home",
    link: "#/",
  },
  {
    text: "What is India?",
    link: "#/about",
  },
  {
    text: "Privacy Policy",
    link: "#/privacy",
  },
];

function Footer({ setPage }) {
  return (
    // Footer Component
    <footer className="footer">
      {footerLinks.map((f) => {
        return (
          <a
            key={f.link}
            href={f.link}
            className="footer_link"
            onClick={(event) => {
              event.preventDefault();
              setPage(f.link);
            }}
          >
            {f.text}
          </a>
        );
      })}
      <p className="footer_copyright">© 2024 Bhavya Pranila Sathi</p>
    </footer>
  );
}

export default Footer;
