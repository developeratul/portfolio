import { useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const Nav = () => {
  const barsRef = useRef();
  const listNavRef = useRef();
  const navRef = useRef();

  const { pathname } = useLocation();

  // for toggling the nav in mobile and tablet type devices
  function ToggleNav() {
    const bars = barsRef.current;
    const listNav = listNavRef.current;

    bars.classList.toggle("toggle");
    listNav.classList.toggle("nav-active");
    document.body.classList.toggle("no-scroll");
  }

  window.addEventListener("scroll", function () {
    const nav = navRef.current;
    nav.classList.toggle("stickyNav", this.window.scrollY > 0);
  });

  useEffect(() => {
    const nav = navRef.current;
    nav.classList.toggle("stickyNav", pathname !== "/");
  }, [pathname]);

  return (
    <nav ref={navRef}>
      <h2 className="nav_title">
        <Link to="/">devr()</Link>
      </h2>

      <ul className="nav_links" ref={listNavRef}>
        <li>
          <NavLink exact activeClassName="nav_active_link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav_active_link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav_active_link" to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav_active_link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="bars" ref={barsRef} onClick={ToggleNav}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
    </nav>
  );
};

export default Nav;
