import Image from "next/image";
import logo from "../public/images/logo.svg";
import hero from "../public/images/illustration-working.svg";
import brand from "../public/images/icon-brand-recognition.svg";
import records from "../public/images/icon-detailed-records.svg";
import customizable from "../public/images/icon-fully-customizable.svg";

export default function Home() {
  return (
    <>
      <nav>
      <Image src={logo} width={100} height={100} alt="/" />Features Pricing Resources Login Sign Up</nav>
      <div id="hero" >
        <Image src={hero} width={500} height={500} alt="hero-image" />
        <h1>More than just shorter links</h1>

        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>

      <div id="shorten">
        {" "}
        <input placeholder="Shorten a link here..."></input>
        <button>Shorten It!</button>
      </div>

      <div id="statistics">
        <h2>Advanced Statistics</h2>{" "}
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div id="Recognition">
          {" "}
          <h3>Brand Recognition</h3>
          <Image src={brand} width={100} height={100} alt="/" />
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>{" "}
        </div>
        <div id="Records">
        <Image src={records} width={100} height={100} alt="/" />
          {" "}
          <h3>Detailed Records</h3>
          <p>
            {" "}
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div id="Customiz">
        <Image src={customizable} width={100} height={100} alt="/" />
          <h3>Fully Customizable</h3>
          <p>
            {" "}
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>

      <div id="shorten-link">
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </div>

      <div id="footer">
        Features Link Shortening Branded Links Analytics Resources Blog
        Developers Support Company About Our Team Careers Contact
      </div>
    </>
  );
}
