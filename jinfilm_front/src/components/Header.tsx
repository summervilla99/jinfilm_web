import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";

const Header: React.FC = () => {
  const [showSubMenus, setShowSubMenus] = useState(false);

  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        const targetId = event.target.id;
        if (targetId === "artists-link") {
          setShowSubMenus(true);
        }
      }
    };

    const handleMouseLeave = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        const targetId = event.target.id;
        if (targetId === "artists-link") {
          setShowSubMenus(false);
        }
      }
    };

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubMenuClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div id="header">
      <div className="top">
        <div id="main-logo">
          <Link to="/">
            <img src="/src/photo/logo.png" alt="JINFILM" />
          </Link>
        </div>
      </div>
      <div className="menu" id="top-menu">
        <ul role="list" className="top-menu-list">
          <li className="list-item">
            <Link
              style={{
                color: "black",
              }}
              to="/about"
              className="top-menu-link"
            >
              About
            </Link>
          </li>
          <li className="list-item" id="artists-link">
            <Link
              style={{
                color: "black",
              }}
              to=""
              className="top-menu-link"
            >
              Artists
            </Link>
            <ul className={`sub-menu ${showSubMenus ? "" : "hidden"}`}>
              <li>
                <Link
                  to="/artist1"
                  onClick={() => handleSubMenuClick("/artist1")}
                >
                  Kang JIN Cheol
                </Link>
              </li>
              <li>
                <Link
                  to="/artist2"
                  onClick={() => handleSubMenuClick("/artist2")}
                >
                  Kim JIN
                </Link>
              </li>
            </ul>
          </li>
          <li className="list-item">
            <Link
              style={{
                color: "black",
              }}
              to="/contact"
              className="top-menu-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
