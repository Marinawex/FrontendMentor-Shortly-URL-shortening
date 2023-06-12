import Image from "next/image";
import hero from "../../public/images/illustration-working.svg";
import Link from "next/link";

function Hero() {
  return (
    <div id="hero" className=" m-4 mb-16 lg:flex lg:pl-52">
      <div className="object-left lg:order-last">
        <Image
          src={hero}
          width={1400}
          height={1400}
          alt="hero-image"
          className="lg:ml-24 lg:self-end"
        />
      </div>
      <div className="lg:text-start lg:self-center">
        <h1 className="m-8 lg:text-start lg:m-0 lg:p-1 lg:text-7xl">
          More than just shorter links
        </h1>
        <p className="my-4 lg:mb-10">
          Build your brand’s recognition and get detailed{" "}
          <br className="invisible lg:visible" />
          insights on how your links are performing.
        </p>
        <Link href={'/#Shorten'} scroll={true} className="scroll-smooth">
        <button className="bg-Cyan rounded-full p-2 px-7 text-white hover:opacity-75">
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
