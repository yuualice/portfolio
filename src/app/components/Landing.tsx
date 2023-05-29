import Navbar from "./Navbar";

export function Landing(): JSX.Element {
  return (
    <div className="landing-container">
      <Navbar />
      <div className="landing-content">
        <h1 className="text-2xl text-neutral-700 font-bold pb-6 md:text-4xl">
          <span>Hello! </span>
          <span className="emoji wave-hand animated">👋</span>
        </h1>
        <h1 className="text-lg  text-neutral-800 pb-6 md:text-2xl">
          <span>{`I'm `}</span>
          <span className="name">Alice</span>
          <span>
            , a front-end software engineer focused on building accessible and
            high-performancing web apps
          </span>
        </h1>
        <h3 className="text-md  text-neutral-800 md:text-lg">
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
    </div>
  );
}

export default Landing;
