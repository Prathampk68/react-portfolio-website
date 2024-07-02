import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-2">
    <div className="flex flex-shrink-0 items-center px-10">
        <img src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl px-10">
        <FaLinkedin><a href="www.linkedin.com"></a></FaLinkedin>
        <FaGithub></FaGithub>
        <FaInstagram></FaInstagram>
        <FaSquareXTwitter></FaSquareXTwitter>

    </div>
  </nav>;

};

export default Navbar;
