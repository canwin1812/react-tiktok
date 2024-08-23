import { CiSearch } from "react-icons/ci"; 
import {useRef} from 'react';
import { PiListLight } from "react-icons/pi";


function Navbar(){
    const navRef = useRef()
    const showNavbar = () =>{
    navRef.current.classList.toggle("reponsive_nav");
    }

    return  (
        <header>
           <button><PiListLight /></button>
            <nav ref={navRef}>
                <a href="">Dang Follow</a>
                <a href="">Danh Cho ban</a>
                   
            </nav>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <CiSearch />
            </button>
        </header>
    );
}

export default Navbar;