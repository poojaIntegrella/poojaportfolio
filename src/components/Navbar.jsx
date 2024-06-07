import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-5 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img className="mx-2 w-10" src={logo} alt="logo image" />
      </div>

      <div className="m-2 flex item-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
