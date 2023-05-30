import github from "../assets/github.svg";
import Image from "next/image";

export function Navbar(): JSX.Element {
  return (
    <nav className="nav-container">
      <div className="landing-button-container">
        <a href="#about">
          <button className="nav-button">About</button>
        </a>
        <a href="#project">
          <button className="nav-button">Projects</button>
        </a>
        {/* TO DO: Implement Contact Form */}
        <a href="#experience">
          <button className="nav-button">Experience</button>
        </a>
      </div>
      <a
        href="https://github.com/yuualice"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="items-center mt-2"
          src="/github.svg"
          width={25}
          height={25}
          alt="Picture of the author"
        ></Image>
      </a>
    </nav>
  );
}
export default Navbar;
