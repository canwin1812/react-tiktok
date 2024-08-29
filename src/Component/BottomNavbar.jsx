import { IoMdHome } from "react-icons/io";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { MdOutlineAddBox } from "react-icons/md";
import { PiChatCenteredThin } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

function BottomNavbar() {
  const showBottomNavbar = () => {};

  return (
    <footer>
      <button className="abc" onClick={showBottomNavbar}>
        <IoMdHome />
        <a href="" className="text-name">
          Home
        </a>
      </button>
      <button className="abc" onClick={showBottomNavbar}>
        <RiCompassDiscoverLine />
        <a href="" className="text-name">
          Discover
        </a>
      </button>
      <button className="abc" onClick={showBottomNavbar}>
        <MdOutlineAddBox />
      </button>
      <button className="abc" onClick={showBottomNavbar}>
        <PiChatCenteredThin />
        <a href="" className="text-name">
          Inbox
        </a>
      </button>
      <button className="abc" onClick={showBottomNavbar}>
        <CgProfile />
        <a href="" className="text-name">
          Profile
        </a>
      </button>
    </footer>
  );
}

export default BottomNavbar;
