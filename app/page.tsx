import Image from "next/image";
import brand from "../public/images/icon-brand-recognition.svg";
import records from "../public/images/icon-detailed-records.svg";
import customizable from "../public/images/icon-fully-customizable.svg";
import Shorten from "./_components/Shorten";
import Hero from "./_components/Hero";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <div className="lg:flex lg:flex-col lg:justify-between ">
        <Hero />

        <Shorten />
        <div className="bg-gray-100">
          <div className="bg-gray-100  py-4 lg:px-52 ">
            <div id="statistics" className="lg:m-20  lg:space-y-6">
              <h2 className="lg:text-4xl">Advanced Statistics</h2>{" "}
              <p className="pb-16 lg:text-xl ">
                Track how your links are performing across the web{" "}
                <br className="invisible lg:visible" />
                with our advanced statistics dashboard.
              </p>
            </div>
            <div></div>

            {/* <div className="bg-Cyan lg:w-full lg:h-2 z-0 ">
            </div> */}

            <div className="lg:flex lg:my-18 lg:text-start ">
              <div
                id="Recognition"
                className="bg-white rounded-sm mx-4 lg:mx-0 p-10 lg:my-14 lg:self-start "
              >
                {" "}
                <div className="relative">
                  <div className="bg-DarkViolet rounded-full w-[5rem] h-[5rem]  flex items-center justify-center absolute  left-[5.5rem] lg:left-0 bottom-0 ">
                    <Image src={brand} width={45} height={45} alt="/" />
                  </div>
                </div>
                <h3 className="mt-6">Brand Recognition</h3>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>{" "}
              </div>

              <div className="bg-Cyan w-3 h-[6rem] ml-[11rem] lg:ml-0 lg:w-52 lg:h-2 lg:my-auto "></div>
              <div
                id="Records"
                className="bg-white rounded-sm mx-4  lg:mx-0 p-10 lg:my-14 lg:self-center"
              >
                <div className="relative">
                  <div className="bg-DarkViolet rounded-full w-[5rem] h-[5rem]  flex items-center justify-center absolute  left-[5.5rem] lg:left-0 bottom-0">
                    <Image src={records} width={45} height={45} alt="/" />{" "}
                  </div>
                </div>
                <h3 className="mt-6">Detailed Records</h3>
                <p className="">
                  {" "}
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
              <div className="bg-Cyan w-3 h-[6rem] ml-[11rem] lg:ml-0 lg:w-52 lg:h-2 lg:my-auto"></div>
              <div
                id="Customiz"
                className="bg-white rounded-sm mx-4 lg:mx-0  p-10 lg:my-12 lg:self-end lg:mt-40"
              >
                <div className="relative">
                  <div className="bg-DarkViolet rounded-full w-[5rem] h-[5rem]  flex items-center justify-center absolute  left-[5.5rem] lg:left-0 bottom-0">
                    <Image src={customizable} width={45} height={45} alt="/" />
                  </div>
                </div>

                <h3 className="mt-6">Fully Customizable</h3>
                <p>
                  {" "}
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="boost"
        className="bg-DarkViolet py-[6rem]  bg-boost-pattern lg:bg-boost-desktop-pattern bg-cover space-y-8"
      >
        <h2 className="text-white lg:text-4xl mb-8">Boost your links today</h2>
        <Link
          href={"/#Shorten"}
          className="bg-Cyan rounded-full  p-2 px-7 text-white hover:opacity-75  scroll-smooth"
          scroll={true}
        >
          Get Started
        </Link>
      </div>
    </>
  );
}
