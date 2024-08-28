import { CiSearch } from "react-icons/ci";
import { useRef, useState } from "react";
import { PiListLight } from "react-icons/pi";

function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const showNavbar = () => {
    setNavbarState(!navbarState);
  };

  return (
    <header>
      <button>
        <PiListLight />
      </button>
      {navbarState && (
        <nav className="reponsive-navbar">
          <a href="">Dang Follow</a>
          <a href="">Danh Cho ban</a>
        </nav>
      )}
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <CiSearch />
      </button>
    </header>
  );
}

export default Navbar;
