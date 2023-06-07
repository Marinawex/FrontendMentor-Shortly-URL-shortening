import Image from "next/image";
import facebock from "../../public/images/icon-facebook.svg";
import instagram from "../../public/images/icon-instagram.svg";
import twitter from "../../public/images/icon-twitter.svg";
import pinterest from "../../public/images/icon-pinterest.svg";
import logoW from "../../public/images/logo-white.svg";

function Footer() {
  return (
    <>
    <div id="footer" className="bg-VeryDarkViolet py-10 flex flex-col">
    <Image
      src={logoW}
      width={100}
      height={100}
      alt="/"
      className="py-6 self-center"
    />

    <ul className="text-white py-4">
      <h4 className="py-4 font-bold">Features</h4>
      <li className="font-[2px] hover:text-Cyan">Link Shortening</li>
      <li className="font-[2px] hover:text-Cyan">Branded Links</li>
      <li className="font-[2px] hover:text-Cyan">Analytics</li>
    </ul>
    <ul className="text-white py-4">
      <h4 className="py-4 font-bold">Resources</h4>
      <li className="font-[2px] hover:text-Cyan">Blog</li>
      <li className="font-[2px] hover:text-Cyan">Developers</li>
      <li className="font-[2px] hover:text-Cyan">Support</li>
    </ul>
    <ul className="text-white">
      <h4 className="py-4 font-bold">Company</h4>
      <li className="font-[2px] hover:text-Cyan">About</li>
      <li className="font-[2px] hover:text-Cyan">Our Team</li>
      <li className="font-[2px] hover:text-Cyan">Careers</li>
      <li className="font-[2px] hover:text-Cyan"> Contact</li>
    </ul>

    <div id="social" className="flex justify-around  py-10 px-16">
      <Image src={facebock} width={25} height={25} alt="/" />{" "}
      <Image src={twitter} width={25} height={25} alt="/" />{" "}
      <Image src={pinterest} width={25} height={25} alt="/" />{" "}
      <Image src={instagram} width={25} height={25} alt="/" />{" "}
    </div>
  </div>
  </>
  )
}

export default Footer