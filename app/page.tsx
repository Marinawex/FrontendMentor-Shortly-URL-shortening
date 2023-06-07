import Image from "next/image";
import brand from "../public/images/icon-brand-recognition.svg";
import records from "../public/images/icon-detailed-records.svg";
import customizable from "../public/images/icon-fully-customizable.svg";
import Shorten from "./_components/Shorten";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Shorten />
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
        <button className="bg-Cyan rounded-full p-2 px-7 text-white hover:opacity-75">
          Get Started
        </button>
      </div>
    </>
  );
}
