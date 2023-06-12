import Image from "next/image";
import facebock from "../../public/images/icon-facebook.svg";
import instagram from "../../public/images/icon-instagram.svg";
import twitter from "../../public/images/icon-twitter.svg";
import pinterest from "../../public/images/icon-pinterest.svg";
import logoW from "../../public/images/logo-white.svg";

function Footer() {
  return (
    <>
      <div
        id="footer"
        className="bg-VeryDarkViolet py-10 flex flex-col lg:flex-row lg:justify-around lg:items-start lg:text-start  lg:px-52 "
      >
        <Image
          src={logoW}
          width={100}
          height={100}
          alt="/"
          className="py-6 self-center lg:self-start "
        />

        <ul className="text-white py-4 lg:py-0">
          <h4 className="py-4 font-bold">Features</h4>
          <li className="font-[2px] hover:text-Cyan cursor-pointer">
            Link Shortening
          </li>
          <li className="font-[2px] hover:text-Cyan cursor-pointer">
            Branded Links
          </li>
          <li className="font-[2px] hover:text-Cyan cursor-pointer">
            Analytics
          </li>
        </ul>
        <ul className="text-white py-4 lg:py-0">
          <h4 className="py-4 font-bold">Resources</h4>
          <li className="font-[2px] hover:text-Cyan cursor-pointer">Blog</li>
          <li className="font-[2px] hover:text-Cyan cursor-pointer">
            Developers
          </li>
          <li className="font-[2px] hover:text-Cyan cursor-pointer">Support</li>
        </ul>
        <ul className="text-white">
          <h4 className="py-4 font-bold">Company</h4>
          <li className="font-[2px] hover:text-Cyan cursor-pointer">About</li>
          <li className="font-[2px] hover:text-Cyan cursor-pointer">
            Our Team
          </li>
          <li className="font-[2px] hover:text-Cyan cursor-pointer">Careers</li>
          <li className="font-[2px] hover:text-Cyan cursor-pointer">
            {" "}
            Contact
          </li>
        </ul>

        <div
          id="social"
          className="flex justify-around  py-10 px-16 lg:space-x-6"
        >
          <Image
            src={facebock}
            width={25}
            height={25}
            alt="/"
            className="cursor-pointer"
          />{" "}
          <Image
            src={twitter}
            width={25}
            height={25}
            alt="/"
            className="cursor-pointer"
          />{" "}
          <Image
            src={pinterest}
            width={25}
            height={25}
            alt="/"
            className="cursor-pointer"
          />{" "}
          <Image
            src={instagram}
            width={25}
            height={25}
            alt="/"
            className="cursor-pointer fill-Cyan"
          />{" "}
        </div>
      </div>
    </>
  );
}

export default Footer;
