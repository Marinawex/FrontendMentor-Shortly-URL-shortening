import Image from "next/image";
import hero from "../../public/images/illustration-working.svg";

function Hero() {
  return (
    <div id="hero" className=" m-4 my-16 lg:flex ">
      <div className="object-left lg:order-last">
        <Image src={hero} width={800} height={800} alt="hero-image" />
      </div>
      <div className="lg:text-start">
        <h1 className="m-8 lg:text-start lg:m-0">More than just shorter links</h1>
        <p className="my-4 ">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-Cyan rounded-full p-2 px-7 text-white hover:opacity-75">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
