import Image from "next/image";
import logo from "../public/images/logo.svg";
import logoW from "../public/images/logo-white.svg";
import hero from "../public/images/illustration-working.svg";
import brand from "../public/images/icon-brand-recognition.svg";
import records from "../public/images/icon-detailed-records.svg";
import customizable from "../public/images/icon-fully-customizable.svg";
import menu from "../public/images/burger-menu-svgrepo-com.svg";
import facebock from "../public/images/icon-facebook.svg";
import instagram from "../public/images/icon-instagram.svg";
import twitter from "../public/images/icon-twitter.svg";
import pinterest from "../public/images/icon-pinterest.svg";


export default function Home() {
  return (
    <>
      <nav >
        <div className="flex justify-between m-5">
          <Image src={logo} width={90} height={30} alt="/" />
          <Image src={menu} width={67} height={30} alt="/" />
        </div>

        {/* Features Pricing Resources Login Sign Up */}
      </nav>
      <div id="hero" className=" m-4 my-16 ">
        <Image src={hero} width={800} height={800} alt="hero-image" />
        <h1 className="m-8">More than just shorter links</h1>
        <p className="my-4 ">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-Cyan rounded-full p-2 px-7 text-white">
          Get Started
        </button>
      </div>

      <div id="shorten">
        {" "}
        <div className="flex flex-col p-4 gap-3 bg-DarkViolet rounded-md m-4 bg-shorten-pattern">
          <input
            placeholder="Shorten a link here..."
            className="rounded-md p-2"
          ></input>
          <button className="bg-Cyan rounded-md p-2 px-7 text-white">
            Shorten It!
          </button>
        </div>
      </div>

      <div id="statistics" className="bg-gray-100 py-8 pt-16">
        <h2>Advanced Statistics</h2>{" "}
        <p className="pb-16">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div id="Recognition" className="bg-white rounded-sm mx-4  p-6  ">
          {" "}
          <div className="relative p-1 mt-2">
            <div className="bg-DarkViolet rounded-full w-[5rem] h-[5rem]  flex items-center justify-center absolute  left-[6.5rem]  bottom-0 ">
              <Image src={brand} width={45} height={45} alt="/" />
            </div>
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>{" "}
        </div>
        <div className="bg-Cyan w-3 h-[6rem] ml-[11rem]"></div>
        <div id="Records" className="bg-white rounded-sm mx-4 p-6 ">
          <div className="relative p-1 mt-2">
            <div className="bg-DarkViolet rounded-full w-[5rem] h-[5rem]  flex items-center justify-center absolute  left-[6.5rem] bottom-0">
              <Image src={records} width={45} height={45} alt="/" />{" "}
            </div>
          </div>
          <h3>Detailed Records</h3>
          <p>
            {" "}
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="bg-Cyan w-3 h-[6rem] ml-[11rem]"></div>
        <div id="Customiz" className="bg-white rounded-sm mx-4  p-6">
          <div className="relative p-1 mt-2">
            <div className="bg-DarkViolet rounded-full w-[5rem] h-[5rem]  flex items-center justify-center absolute  left-[6.5rem] bottom-0">
              <Image src={customizable} width={45} height={45} alt="/" />
            </div>
          </div>

          <h3>Fully Customizable</h3>
          <p>
            {" "}
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>

      <div id="boost" className="bg-DarkViolet py-[6rem]  bg-boost-pattern">
        <h2 className="text-white">Boost your links today</h2>
        <button className="bg-Cyan rounded-full p-2 px-7 text-white">
          Get Started
        </button>
      </div>

      <div id="footer" className="bg-VeryDarkViolet py-10 flex flex-col">
        <Image src={logoW} width={100} height={100} alt="/" className="py-6 self-center"/>

        <ul className="text-white py-4">
          <h4 className="py-4 font-bold">Features</h4>
          <li className="font-[2px]" >Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul className="text-white py-4">
          <h4 className="py-4 font-bold">Resources</h4>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul className="text-white">
          <h4 className="py-4 font-bold">Company</h4>
          <li className="">About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li> Contact</li>
        </ul>

        <div id="social" className="flex justify-around  py-10 px-16">
        <Image src={facebock} width={25} height={25} alt="/" />{" "}
        <Image src={twitter} width={25} height={25} alt="/" />{" "}
        <Image src={pinterest} width={25} height={25} alt="/" />{" "}
        <Image src={instagram} width={25} height={25} alt="/" />{" "}
        </div>
      </div>
    </>
  );
}
