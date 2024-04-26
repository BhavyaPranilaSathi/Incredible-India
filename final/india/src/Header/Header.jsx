import { useState } from "react";
import "./Header.css";
import imageEmblem from "/images/placeholder-logo.png";


const uriList = [
  {
    name: "HISTORY",
    path: "#/history",
  },
  {
    name: "FACTS",
    path: "#/facts",
  },
  {
    name: "QUIZ",
    path: "#/quiz",
  },
];

function Header({ setPage, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    return menuOpen ? closeMenu() : openMenu();
  };

  const openThemeMenu = () => {
    setThemeMenuOpen(true);
  };

  const closeThemeMenu = () => {
    setThemeMenuOpen(false);
  };

  const toggleThemeMenu = () => {
    return themeMenuOpen ? closeThemeMenu() : openThemeMenu();
  };

  const menuStyle = menuOpen ? "navbar_menu--open" : "";
  const menuIconStyle = menuOpen ? "gg-close" : "gg-menu-left";

  const themeMenuStyle = themeMenuOpen ? "navbar_theme-menu--open" : "";
  const themeMenuIconStyle = themeMenuOpen ? "gg-close" : "gg-chevron-down";

  const navList = uriList.map((item) => {
    return (
      <li className="navbar_item" key={item.name}>
        <a
          href={item.path}
          className="navbar_link"
          onClick={(event) => {
            event.preventDefault();
            setPage(item.path);
            closeMenu();
            closeThemeMenu();
          }}
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    /* Header Component */
    <header className="header">
      <nav className="navbar">
        <a
          href="#/"
          className="navbar_logo-link"
          aria-label="Homepage"
          onClick={(event) => {
            event.preventDefault();
            setPage("#/");
            closeMenu();
            closeThemeMenu();
          }}
        >
          <img src={imageEmblem} alt="Logo" className="navbar_logo" />
          
        </a>
        <ul className={`navbar_menu ${menuStyle}`}>
          {navList}
          <li className="navbar_item navbar_theme-dropdown">
            <button
              className={`navbar_button ${
                themeMenuOpen ? "navbar_button--open" : ""
              }`}
              onClick={() => toggleThemeMenu()}
              aria-label={
                themeMenuOpen ? "Close Theme Menu" : "Open Theme Menu"
              }
            >
              THEME{" "}
              <i className={`navbar_button-icon ${themeMenuIconStyle}`} />
            </button>
            <ul className={`navbar_theme-menu ${themeMenuStyle}`}>
              <li className="navbar_theme-item">
                <button
                  className="navbar_theme-button"
                  onClick={() => {
                    closeThemeMenu();
                    closeMenu();
                    setTheme("light");
                  }}
                >
                  LIGHT
                </button>
              </li>
              <li className="navbar_theme-item">
                <button
                  className="navbar_theme-button"
                  onClick={() => {
                    closeThemeMenu();
                    closeMenu();
                    setTheme("dark");
                  }}
                >
                  DARK
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <button
          className="navbar_menu-button"
          aria-label={
            menuOpen ? "Close Navigation Menu" : "Open Navigation Menu"
          }
          onClick={() => {
            toggleMenu();
            closeThemeMenu();
          }}
        >
          <i className={`navbar_menu-icon ${menuIconStyle}`} />
        </button>
      </nav>
    </header>
  );
}

export default Header;
