import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0); // Track active link index
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  // Initializes the position and dimensions of the active box.
  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(() => {
    // Initialize active box position on first render
    initActiveBox();

    // Add resize event listener to update the box position on window resize
    window.addEventListener("resize", initActiveBox);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  // Handles click on a navigation link and updates the active box position.
  const activeCurrentLink = (index, event) => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    setActiveLinkIndex(index); // Update active link index

    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  // Navigation items
  const navItems = [
    { label: "Home", link: "#home", className: "nav-link" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Reviews", link: "#reviews", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className }, index) => (
        <a
          href={link}
          className={className + (activeLinkIndex === index ? " active" : "")}
          key={index}
          onClick={(event) => activeCurrentLink(index, event)}
          ref={index === activeLinkIndex ? lastActiveLink : null} // Assign ref only to the active link
        >
          {label}
        </a>
      ))}
      <div className="navbar-active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
