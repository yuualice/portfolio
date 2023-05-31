import Navbar from "./Navbar";
import Image from "next/image";

export function Landing(): JSX.Element {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="landing-content">
        <div className="flex flex-col items-start justify-center md:w-4/5">
          <h1 className="text-2xl text-neutral-700 font-bold pb-6 md:text-4xl">
            <span>Hello! </span>
            <span className="emoji wave-hand animated">👋</span>
          </h1>
          <h1 className="text-lg  text-neutral-700 pb-6 md:text-2xl">
            <span>{`I'm `}</span>
            <span className="name">Alice</span>
            <span>
              , a front-end software engineer focused on building accessible and
              high-performing web apps
            </span>
          </h1>
          <h3 className="text-md  text-neutral-700 md:text-lg">
            <span>get in touch </span>
            <span className="emoji">👉 </span>
            <span>
              <a
                href="mailto:yuualice@live.unc.edu"
                target="_blank"
                // To Do: Add hover effect
                className="highlight-link"
              >
                yuualice@live.unc.edu
              </a>
            </span>
          </h3>
        </div>
        <div className="hidden items-center justify-center md:w-1/4 md:flex md:flex-row md:ml-10">
          <Image
            className="landing-image"
            src="/profile.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="landing image"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
