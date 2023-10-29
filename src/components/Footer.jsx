import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
import FooterDetails from "./FooterDetails";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus metus
          nunc, bibendum eu orci ut, lobortis porttitor erat. Donec vestibulum
          luctus finibus. Integer eget velit eu erat euismod elementum.
        </p>
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <FooterDetails />
    </div>
  );
}

export default Footer;
