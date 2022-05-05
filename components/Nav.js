import React from "react";
import styles from "../styles/Navbar.module.scss";
import { MdOutlineOpenInFull } from "react-icons/md";
import { MdCloseFullscreen } from "react-icons/md";
import { useState, useRef, useEffect } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showing, setShowing] = useState(false);
  const [opacity, setOpacity] = useState(0.5);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowing(!showing);
  };

  const navHome = useRef(null);
  const navAbout = useRef(null);
  const navProjects = useRef(null);
  const navSkills = useRef(null);
  const navContact = useRef(null);

  const handleOpacity = () => {
    if (window.scrollY > 0) {
      setOpacity(0.5);
    } else {
      setOpacity(1);
    }
  };

  // ! highlight the current section

  const highlight = () => {
    let scrollPosition = window.scrollY;
    const elem = document.querySelectorAll(".highlight");

    if (window.innerWidth > 991 && scrollPosition < 450) {
      navHome.current.classList.add(styles.highlight);
      navAbout.current.classList.remove(styles.highlight);
      return;
    } else if (
      window.innerWidth > 991 &&
      scrollPosition > 450 &&
      scrollPosition < 1350
    ) {
      navAbout.current.classList.add(styles.highlight);
      navHome.current.classList.remove(styles.highlight);
      navProjects.current.classList.remove(styles.highlight);
      return;
    } else if (
      window.innerWidth > 991 &&
      scrollPosition > 1350 &&
      scrollPosition < 2500
    ) {
      navProjects.current.classList.add(styles.highlight);
      navAbout.current.classList.remove(styles.highlight);
      navSkills.current.classList.remove(styles.highlight);
      return;
    } else if (
      window.innerWidth > 991 &&
      scrollPosition > 2500 &&
      scrollPosition < 3600
    ) {
      navSkills.current.classList.add(styles.highlight);
      navProjects.current.classList.remove(styles.highlight);
      navContact.current.classList.remove(styles.highlight);
      return;
    } else if (window.innerWidth > 991 && scrollPosition > 3600) {
      navContact.current.classList.add(styles.highlight);
      navSkills.current.classList.remove(styles.highlight);
      return;
    }

    if (window.innerWidth < 991) {
      navHome.current.classList.remove(styles.highlight);
      navAbout.current.classList.remove(styles.highlight);
      navProjects.current.classList.remove(styles.highlight);
      navSkills.current.classList.remove(styles.highlight);
      navContact.current.classList.remove(styles.highlight);
    }

    // if ((elem && window.innerWidth < 767 && scrollPosition < 450) || elem) {
    //   elem.forEach((e) => {
    //     e.classList.remove(styles.highlight);
    //   });
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", highlight);
    window.addEventListener("scroll", handleOpacity);
    window.addEventListener("resize", highlight);
    return () => {
      window.removeEventListener("scroll", highlight);
      window.removeEventListener("resize", highlight);
    };
  });

  const show = isOpen ? "show" : "";

  return (
    <nav
      className="navbar navbar-expand-lg  fixed-top my-3 start-0 end-0 top-0"
      id={styles.navbar}
      style={{ opacity: opacity }}
    >
      <div className="container-fluid" id={styles.navContainer}>
        <a
          className="navbar-brand"
          href="#"
          onClick={showing ? toggleMenu : null}
          id={styles.navBrand}
        >
          Portfolio DS
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          {show ? (
            <MdCloseFullscreen className={styles.navIcon} />
          ) : (
            <MdOutlineOpenInFull className={styles.navIcon} />
          )}
        </button>

        <div className={"collapse navbar-collapse " + show}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item text-sm-start px-sm-2 my-sm-2">
              <a
                className="nav-link"
                href="#"
                onClick={showing ? toggleMenu : null}
                id={styles.navItem}
                ref={navHome}
              >
                Home
              </a>
            </li>
            <li className="nav-item text-sm-start mx-sm-2  my-sm-2">
              <a
                className="nav-link"
                href="#about"
                onClick={showing ? toggleMenu : null}
                id={styles.navItem}
                ref={navAbout}
              >
                About
              </a>
            </li>
            <li className="nav-item text-sm-start mx-sm-2  my-sm-2">
              <a
                className="nav-link"
                href="#projects"
                onClick={showing ? toggleMenu : null}
                id={styles.navItem}
                ref={navProjects}
              >
                Projects
              </a>
            </li>

            <li className="nav-item text-sm-start mx-sm-2  my-sm-2">
              <a
                className="nav-link"
                href="#skills"
                onClick={showing ? toggleMenu : null}
                id={styles.navItem}
                ref={navSkills}
              >
                Skills
              </a>
            </li>

            <li className="nav-item text-sm-start mx-sm-2  my-sm-2">
              <a
                className="nav-link"
                href="#contact"
                onClick={showing ? toggleMenu : null}
                id={styles.navItem}
                ref={navContact}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
